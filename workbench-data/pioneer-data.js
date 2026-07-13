// Pioneer Library System demo dataset — seeded from live-site research 2026-07-07.
// Shared by the three interactive workbenches (explorer/, admin/, backend/).
window.PIONEER_DATA = {
  theme: {
    name: "Pioneer Library System",
    shortName: "Pioneer Library",
    tagline: "We are innovators. We are your library.",
    mission: "Inspiring innovation, engagement and learning in our communities.",
    tokens: {
      brandPrimary: "#67338E", brandPrimaryStrong: "#46166B",
      brandAccent: "#1B96D4", brandAccentDeep: "#1E6093", brandAccentTint: "#45B1E7",
      brandAccent2: "#FF8300", logoRed: "#EA0029", highlight: "#FBD20A",
      ink: "#23242A", inkMuted: "#515462", surface: "#FFFFFF", bg: "#F7F7F7",
      success: "#15803D", warning: "#B45309", danger: "#B91C1C", focus: "#1B96D4"
    },
    font: "Alexandria", poweredBy: "EnvisionWare"
  },
  library: {
    slug: "pioneer", name: "Pioneer Library System", hq: "Norman West — 300 Norman Center Ct, Norman, OK 73072",
    counties: ["Cleveland","McClain","Pottawatomie"], populationServed: 389627, finePolicy: "fine-free",
    cardPolicy: "Free for residents/workers/students/property owners in the 3 counties. Full Service (in person) or instant Digital Access Card (online). 100-item limit; books 21 days; DVDs & magazines 7 days.",
    todayBranch: "Norman West", todayHours: "9:00 AM – 9:00 PM", isOpenNow: true
  },
  branches: [
    {id:"norman-west",name:"Norman West",city:"Norman",tier:"large",hours:"M–Th 9–9 · F 9–8 · Sa 9–5 · Su 1–6"},
    {id:"norman-east",name:"Norman East",city:"Norman",tier:"large",hours:"M–Th 9–9 · F 9–8 · Sa 9–5 · Su 1–6"},
    {id:"moore",name:"Moore",city:"Moore",tier:"large",hours:"M–Th 9–9 · F 9–8 · Sa 9–5 · Su 1–6"},
    {id:"swokc",name:"Southwest OKC",city:"Oklahoma City",tier:"large",hours:"M–Th 9–9 · F 9–8 · Sa 9–5 · Su 1–6"},
    {id:"shawnee",name:"Shawnee",city:"Shawnee",tier:"large",hours:"M–Th 9–9 · F 9–6 · Sa 9–5 · Su 1–5"},
    {id:"blanchard",name:"Blanchard",city:"Blanchard",tier:"mid",hours:"M–Th 9–7 · F 9–6 · Sa 9–5 · Su 1–5"},
    {id:"newcastle",name:"Newcastle",city:"Newcastle",tier:"mid",hours:"M–Th 9–7 · F 9–6 · Sa 9–5 · Su 1–5"},
    {id:"noble",name:"Noble",city:"Noble",tier:"mid",hours:"M–Th 9–7 · F 9–6 · Sa 9–5 · Su 1–5"},
    {id:"purcell",name:"Purcell",city:"Purcell",tier:"mid",hours:"M–Th 9–7 · F 9–6 · Sa 9–5 · Su 1–5"},
    {id:"mcloud",name:"McLoud",city:"McLoud",tier:"small",hours:"M–Th 10–7 · F 10–6 · Sa 10–1 · Su 1–5"},
    {id:"tecumseh",name:"Tecumseh",city:"Tecumseh",tier:"small",hours:"M–Th 10–7 · F 10–6 · Sa 10–1 · Su 1–5"},
    {id:"library-lab",name:"Library Lab",city:"Norman (downtown)",tier:"lab",hours:"M–F 10–7 · Sa 10–5 · Su 1–6"}
  ],
  events: [
    {id:"storytime-toddler",title:"Toddler Story Time (1–3 years)",series:"Story Time",time:"10:00 AM",branch:"Norman East",room:"Children's Program Room",registration:"drop-in",audience:"Ages 1–3 + caregivers"},
    {id:"pj-storytime",title:"Family Story Time: PJ Story Time!",series:"Story Time",time:"6:30 PM",branch:"Library Lab",room:"Community Room",registration:"drop-in",audience:"Families"},
    {id:"rhythm-babies",title:"Rhythm Babies (0–24 months)",series:"Early Literacy",time:"10:30 AM",branch:"Moore",room:"Story Room",registration:"drop-in",audience:"Babies + caregivers"},
    {id:"glass-lantern",title:"Creativity Unleashed: Glass Lantern",series:"Creativity Unleashed",time:"2:00 PM",branch:"Southwest OKC",room:"Maker Studio",registration:"required",capacity:16,seatsLeft:5,audience:"Adults",paid:true,priceCents:1500},
    {id:"yoga",title:"Get Moving with All Levels Yoga",series:"Get Moving",time:"6:30 PM",branch:"Moore",room:"Community Room A",registration:"required",capacity:24,seatsLeft:11,audience:"Adults"},
    {id:"resume-help",title:"Land That Job: Resume Help",series:"Land That Job",time:"1:00 PM",branch:"Norman West",room:"Study Room 2",registration:"drop-in",audience:"Adults"},
    {id:"soldering",title:"Learn It! Soldering for Beginners",series:"Learn It!",time:"3:00 PM",branch:"Blanchard",room:"Maker Corner",registration:"required",capacity:10,seatsLeft:2,audience:"Teens & Adults",paid:true,priceCents:1000},
    {id:"mahjong",title:"Connection Corner: Mahjong",series:"Connection Corner",time:"12:30 PM",branch:"Newcastle",room:"Meeting Room",registration:"drop-in",audience:"Adults"}
  ],
  rooms: [
    {id:"nw-study-1",name:"Study Room 1",branch:"Norman West",capacity:4,equipment:["display","whiteboard"],slots:["10:00","11:00","13:00","15:00","16:00"],booked:["12:00","14:00"]},
    {id:"nw-study-2",name:"Study Room 2",branch:"Norman West",capacity:6,equipment:["display","whiteboard","conference phone"],slots:["09:00","10:00","14:00","17:00"],booked:["11:00","13:00"]},
    {id:"nw-community",name:"Community Room",branch:"Norman West",capacity:60,equipment:["projector","podium","AV"],slots:["09:00","13:00"],booked:["18:00"]},
    {id:"lab-maker",name:"Maker Studio (appointment)",branch:"Library Lab",capacity:8,equipment:["3D printers","soldering","vinyl cutter"],slots:["10:00","12:00","15:00"],booked:["14:00"]}
  ],
  services: [
    {id:"printing",name:"Printing & Copying",desc:"B&W $0.10/page, color $0.50/page. Send from your phone or a library PC.",product:"P03/P14",inferred:true},
    {id:"computers",name:"Computers & WiFi",desc:"Public PCs at every branch; free WiFi everywhere.",product:"P01"},
    {id:"meeting-rooms",name:"Meeting Spaces",desc:"Reserve a room online — study rooms to community rooms.",product:"P02"},
    {id:"maker",name:"Maker Services",desc:"3D printing & maker appointments at the Library Lab and branch maker corners.",product:"P02"},
    {id:"holds",name:"Holds Pickup",desc:"Reserve items and pick them up at your branch — or a 24-Hour Library kiosk.",product:"P08"},
    {id:"selfcheck",name:"Self Checkout",desc:"Skip the line — check out with your card at any self-check station.",product:"P05"},
    {id:"curbside",name:"Curbside & Delivery",desc:"We come to you — curbside pickup and home delivery.",product:null},
    {id:"librarian",name:"Schedule a Librarian",desc:"One-on-one help: tech, research, job search.",product:null}
  ],
  resources: [
    {id:"libby",name:"Libby / OverDrive",label:"Borrow eBooks & eAudio"},
    {id:"hoopla",name:"Hoopla",label:"Stream movies, music, comics — no waitlists"},
    {id:"brainfuse",name:"Brainfuse HelpNow",label:"Free live tutoring & homework help"},
    {id:"ancestry",name:"Ancestry.com",label:"Family history research (in-library)"},
    {id:"imagination",name:"Imagination Library",label:"Free monthly books for kids 0–5"},
    {id:"excel-hs",name:"Excel Adult High School",label:"Earn an accredited diploma"}
  ],
  wayfinding: [
    {id:"holds",label:"Pick up my holds",directions:"Holds shelves are just past the entrance on the right — look for your name, then use self-check."},
    {id:"children",label:"Children's area",directions:"Straight ahead past the service desk, follow the colorful carpet."},
    {id:"study",label:"Study rooms",directions:"Left corridor past the computer area — rooms 1 and 2."},
    {id:"print",label:"Print / copy station",directions:"Next to the public computers, left of the service desk."},
    {id:"restroom",label:"Restrooms",directions:"Back hallway near the community room, fully accessible."},
    {id:"makerspace",label:"Maker Studio",directions:"Library Lab: rear of the space, staff can badge you in for appointments."}
  ],
  patrons: [
    {id:"21000012345678",pin:"1234",name:"Jordan Ellis",branch:"Norman West",checkouts:[
      {title:"The Frugal Wizard's Handbook",due:"in 6 days",renewable:true},
      {title:"Lessons in Chemistry",due:"in 13 days",renewable:true},
      {title:"OK History: A Primer (DVD)",due:"OVERDUE 2 days",renewable:false}],
     holds:[{title:"Fourth Wing",status:"Ready for pickup",location:"Norman West holds shelf"},{title:"Iron Flame",status:"#3 in queue"}],
     fees:[{desc:"Lost item: Goodnight Moon (board book)",amount:8.99}], feesNote:"Pioneer is fine-free — fees apply only to lost/damaged items."},
    {id:"21000098765432",pin:"4321",name:"Sam Rivera",branch:"Moore",checkouts:[],holds:[],fees:[]}
  ],
  modules: {
    enabled: [
      {key:"pcres",pid:"P01",name:"PC Reservation®",health:"green",calls:["GET /sessions?branch","POST /reservations"]},
      {key:"print",pid:"P03/P14",name:"LPT:One™ + Print Service",health:"green",calls:["POST /print/quote","POST /print/jobs","POST /print/release"]},
      {key:"rooms",pid:"P02",name:"Reservation Service",health:"green",calls:["GET /availability","POST /bookings","DELETE /bookings/{id}"]},
      {key:"circulation",pid:"P05/P08",name:"Cloud9 Self Check + Holds Locker",health:"amber",calls:["GET /holds/{patron}","GET /locker/status"]},
      {key:"payments",pid:"SN08",name:"EnvisionWare Payments (Adyen)",health:"green",calls:["POST /payments/sessions","POST /webhooks/adyen"]}
    ],
    catalog: [
      {pid:"P06",name:"RFID Suite / ProLine"},{pid:"P07",name:"AMH Sorters (Lyngsoe)"},{pid:"P09",name:"Library Document Station"},
      {pid:"P10",name:"Tablet Station (Hublet)"},{pid:"P12",name:"24-Hour Library / LibCabinet"},{pid:"P13",name:"Analytics / Enterprise Reporter"}
    ]
  },
  usage: { // sample metering for dashboards (marked SAMPLE in UI)
    days: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    qrScans: [212,246,231,258,290,342,167], appLoads: [388,412,395,441,502,610,289], aiTurns: [644,701,668,752,830,1044,471],
    // AI token metering — EnvisionWare-staff-only (cost visibility). calls == AI turns (7d).
    ai: {calls:5110, sessions:1290, inputTokens:6132000, outputTokens:459900,
      model:"claude-haiku-4-5-20251001", priceInPerM:1.00, priceOutPerM:5.00,
      callsByDay:[644,701,668,752,830,1044,471]},
    routeMix: {answer:46,wayfind:19,transaction:17,clarify:12,escalate:6},
    features: {events:28,rooms:22,account:18,print:14,wayfinding:11,resources:7},
    escalationReasons: {account:34,technology:26,other:18,language:12,accessibility:7,safety:3},
    payments: {count:134,volume:632.40,byMethod:{card:62,googlepay:28,applepay:26,cashapp:18},
      byPurpose:{
        "Printing":{amount:214.60,count:68},
        "Fines & lost-item fees":{amount:176.00,count:22},
        "Events & seminars":{amount:120.00,count:8}, // paid programs — Adyen rail, purpose 'event'
        "Room reservations":{amount:84.00,count:28},
        "Replacement cards":{amount:37.80,count:8}
      }},
    insights: [
      "Printing questions fail 3× more often on weekends — Print Service config gap at Moore? (34 failed intents)",
      "Room bookings peak Tue/Thu 3–6 PM; Study Room 2 at Norman West is the contention point — suggest promoting Library Lab rooms.",
      "Spanish-language turns doubled this month (locale=es 4.1% → 8.3%) — consider enabling the es UI pack.",
      "Storytime wayfinding requests spike 15 min before each session — add a temporary home-screen banner on event days."
    ]
  },
  qrPlacements: [
    {id:"qr-nw-entrance",label:"Norman West — Entrance",scans7d:1204},
    {id:"qr-nw-desk",label:"Norman West — Service Desk",scans7d:388},
    {id:"qr-moore-entrance",label:"Moore — Entrance",scans7d:876},
    {id:"qr-lab-maker",label:"Library Lab — Maker Studio",scans7d:203}
  ],
  adyen: { // stub wiring shown in backend console
    flow:"Sessions + Components (adyen-web v6)", methods:["card","googlepay","applepay","cashapp_qr"],
    splits:[{type:"BalanceAccount",to:"Pioneer Library System"},{type:"Commission",to:"EnvisionWare (liable)"}],
    webhooks:["AUTHORISATION","CAPTURE","REFUND","CHARGEBACK"], pci:"SAQ-A (Components iframes)"
  }
};
