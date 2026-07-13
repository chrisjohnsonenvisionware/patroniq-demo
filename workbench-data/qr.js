// QR encoder (byte mode, EC level M, versions 1-10, mask auto-select).
// Extracted from explorer/index.html — verified by round-trip decode with jsQR.
// Exposes a global `QR` with QR.svg(text) -> SVG string.
const QR=(()=>{
  const EXP=new Uint8Array(512),LOG=new Uint8Array(256);
  for(let i=0,x=1;i<255;i++){EXP[i]=x;LOG[x]=i;x<<=1;if(x&256)x^=0x11d;}
  for(let i=255;i<510;i++)EXP[i]=EXP[i-255];
  const mul=(a,b)=>(a&&b)?EXP[LOG[a]+LOG[b]]:0;
  function rsGen(n){let g=[1];for(let i=0;i<n;i++){const a=EXP[i],ng=new Array(g.length+1).fill(0);for(let j=0;j<g.length;j++){ng[j]^=g[j];ng[j+1]^=mul(g[j],a);}g=ng;}return g;}
  function rsRemainder(data,ecLen){const gen=rsGen(ecLen),res=new Array(ecLen).fill(0);
    for(const d of data){const f=d^res[0];res.shift();res.push(0);if(f)for(let i=0;i<ecLen;i++)res[i]^=mul(gen[i+1],f);}return res;}
  const BLOCKS=[null,
    [[1,26,16]],[[1,44,28]],[[1,70,44]],[[2,50,32]],[[2,67,43]],
    [[4,43,27]],[[4,49,31]],[[2,60,38],[2,61,39]],[[3,58,36],[2,59,37]],[[4,69,43],[1,70,44]]];
  const ALIGN=[null,[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50]];
  const dataCap=v=>BLOCKS[v].reduce((s,g)=>s+g[0]*g[2],0);
  function chooseVersion(len){for(let v=1;v<=10;v++)if(4+(v<10?8:16)+8*len<=dataCap(v)*8)return v;return null;}
  function buildCodewords(bytes,v){
    const cap=dataCap(v),bits=[];
    const push=(val,n)=>{for(let i=n-1;i>=0;i--)bits.push((val>>i)&1);};
    push(4,4);push(bytes.length,v<10?8:16);
    for(const b of bytes)push(b,8);
    push(0,Math.min(4,cap*8-bits.length));
    while(bits.length%8)bits.push(0);
    const data=[];
    for(let i=0;i<bits.length;i+=8){let b=0;for(let j=0;j<8;j++)b=(b<<1)|bits[i+j];data.push(b);}
    for(let p=0;data.length<cap;p++)data.push(p%2?0x11:0xEC);
    const blocks=[];let off=0;
    for(const[n,total,dc]of BLOCKS[v])for(let k=0;k<n;k++){const d=data.slice(off,off+dc);off+=dc;blocks.push({d,e:rsRemainder(d,total-dc)});}
    const out=[];
    const maxD=Math.max(...blocks.map(b=>b.d.length));
    for(let i=0;i<maxD;i++)for(const b of blocks)if(i<b.d.length)out.push(b.d[i]);
    const maxE=Math.max(...blocks.map(b=>b.e.length));
    for(let i=0;i<maxE;i++)for(const b of blocks)if(i<b.e.length)out.push(b.e[i]);
    return out;
  }
  const MASKS=[
    (i,j)=>(i+j)%2===0,(i,j)=>i%2===0,(i,j)=>j%3===0,(i,j)=>(i+j)%3===0,
    (i,j)=>(Math.floor(i/2)+Math.floor(j/3))%2===0,(i,j)=>(i*j)%2+(i*j)%3===0,
    (i,j)=>((i*j)%2+(i*j)%3)%2===0,(i,j)=>((i*j)%3+(i+j)%2)%2===0];
  const digits=n=>{let d=0;while(n){d++;n>>>=1;}return d;};
  function bch15(data){const G=0x537;let d=data<<10;while(digits(d)-digits(G)>=0)d^=G<<(digits(d)-digits(G));return((data<<10)|d)^0x5412;}
  function bch18(v){const G=0x1F25;let d=v<<12;while(digits(d)-digits(G)>=0)d^=G<<(digits(d)-digits(G));return(v<<12)|d;}
  function makeMatrix(v,cw,mask){
    const N=17+4*v;
    const M=Array.from({length:N},()=>new Array(N).fill(null));
    const finder=(r0,c0)=>{for(let r=-1;r<=7;r++)for(let c=-1;c<=7;c++){
      const rr=r0+r,cc=c0+c;
      if(rr<0||rr>=N||cc<0||cc>=N)continue;
      M[rr][cc]=(r>=0&&r<=6&&(c===0||c===6))||(c>=0&&c<=6&&(r===0||r===6))||(r>=2&&r<=4&&c>=2&&c<=4);
    }};
    finder(0,0);finder(N-7,0);finder(0,N-7);
    for(const r of ALIGN[v])for(const c of ALIGN[v]){
      if(M[r][c]!==null)continue;
      for(let dr=-2;dr<=2;dr++)for(let dc=-2;dc<=2;dc++)
        M[r+dr][c+dc]=Math.max(Math.abs(dr),Math.abs(dc))!==1;
    }
    for(let i=8;i<N-8;i++){if(M[i][6]===null)M[i][6]=i%2===0;if(M[6][i]===null)M[6][i]=i%2===0;}
    const fb=bch15(mask); /* EC level M = 00 */
    for(let i=0;i<15;i++){
      const mod=((fb>>i)&1)===1;
      if(i<6)M[i][8]=mod;else if(i<8)M[i+1][8]=mod;else M[N-15+i][8]=mod;
      if(i<8)M[8][N-i-1]=mod;else if(i<9)M[8][15-i]=mod;else M[8][14-i]=mod;
    }
    M[N-8][8]=true;
    if(v>=7){const vb=bch18(v);
      for(let i=0;i<18;i++){const mod=((vb>>i)&1)===1;
        M[Math.floor(i/3)][i%3+N-11]=mod;M[i%3+N-11][Math.floor(i/3)]=mod;}}
    const mf=MASKS[mask];
    let inc=-1,row=N-1,bitIdx=7,byteIdx=0;
    for(let col=N-1;col>0;col-=2){
      if(col===6)col--;
      for(;;){
        for(let c=0;c<2;c++){
          if(M[row][col-c]===null){
            let dark=false;
            if(byteIdx<cw.length)dark=((cw[byteIdx]>>>bitIdx)&1)===1;
            if(mf(row,col-c))dark=!dark;
            M[row][col-c]=dark;
            if(--bitIdx===-1){byteIdx++;bitIdx=7;}
          }
        }
        row+=inc;
        if(row<0||row>=N){row-=inc;inc=-inc;break;}
      }
    }
    return M;
  }
  function penalty(M){
    const N=M.length;let p=0;
    for(let r=0;r<N;r++){let run=1;for(let c=1;c<N;c++){if(M[r][c]===M[r][c-1])run++;else{if(run>=5)p+=run-2;run=1;}}if(run>=5)p+=run-2;}
    for(let c=0;c<N;c++){let run=1;for(let r=1;r<N;r++){if(M[r][c]===M[r-1][c])run++;else{if(run>=5)p+=run-2;run=1;}}if(run>=5)p+=run-2;}
    for(let r=0;r<N-1;r++)for(let c=0;c<N-1;c++){const v=M[r][c];if(v===M[r][c+1]&&v===M[r+1][c]&&v===M[r+1][c+1])p+=3;}
    const pat=[1,0,1,1,1,0,1];
    const scan=get=>{for(let a=0;a<N;a++)for(let b=0;b+6<N;b++){
      let ok=true;for(let k=0;k<7;k++)if(!!get(a,b+k)!==!!pat[k]){ok=false;break;}
      if(!ok)continue;
      const lb=b>=4&&[1,2,3,4].every(k=>!get(a,b-k));
      const la=b+10<N&&[7,8,9,10].every(k=>!get(a,b+k));
      if(lb||la)p+=40;
    }};
    scan((a,b)=>M[a][b]);scan((a,b)=>M[b][a]);
    let dark=0;for(const row of M)for(const m of row)if(m)dark++;
    p+=Math.floor(Math.abs(dark*100/(N*N)-50)/5)*10;
    return p;
  }
  function encode(text){
    const bytes=Array.from(new TextEncoder().encode(text));
    const v=chooseVersion(bytes.length);
    if(!v)return null;
    const cw=buildCodewords(bytes,v);
    let best=null,bestP=Infinity;
    for(let m=0;m<8;m++){const M=makeMatrix(v,cw,m);const pp=penalty(M);if(pp<bestP){bestP=pp;best=M;}}
    return best;
  }
  function svg(text,opts){
    opts=opts||{};
    const M=encode(text);
    if(!M)return '<p role="img">QR unavailable — URL too long (over ~200 characters).</p>';
    const N=M.length,Q=4,T=N+2*Q;
    let d='';
    for(let r=0;r<N;r++)for(let c=0;c<N;c++)if(M[r][c])d+='M'+(c+Q)+' '+(r+Q)+'h1v1h-1z';
    return '<svg viewBox="0 0 '+T+' '+T+'" role="img" aria-label="'+(opts.label||'QR code')+'" shape-rendering="crispEdges" style="display:block;width:100%;height:auto"><rect width="'+T+'" height="'+T+'" fill="#FFFFFF"/><path d="'+d+'" fill="'+(opts.dark||'#1A1A1E')+'"/></svg>';
  }
  return {encode,svg};
})();
