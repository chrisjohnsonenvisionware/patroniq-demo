// notes-sync.js — shared across the workbench mocks. Two jobs:
//   1. Identity: each tester says who they are once (Name + Role, e.g. "John / CEO"); stored
//      in localStorage piq_identity and shown as a chip. Notes then attribute to a person.
//   2. Central collection: every note in localStorage piq_notes is POSTed to the server sink
//      (/api/patroniq/notes, same-origin) so ALL testers' feedback lands in one place — no
//      more per-browser islands. Best-effort: if there's no backend (e.g. public GitHub
//      Pages), notes simply stay local and can still be exported via "Copy for Claude".
// Exposes window.PIQNotes = { push(text, context), identity(), setIdentity() }.
(function () {
  "use strict";
  const LS_NOTES = "piq_notes";
  const LS_SYNCED = "piq_notes_synced";
  const LS_ID = "piq_identity";
  const SINK = "/api/patroniq/notes"; // same-origin; 404s harmlessly on static hosts

  const APP = (location.pathname.match(/\/(admin|backend|explorer|kiosk)(\/|\.html|$)/) || [, "app"])[1];
  const ROLES = ["CEO", "Sales", "Marketing", "Engineering", "Product", "Care", "Professional Services", "Library staff", "Other"];

  const readJSON = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
  const hash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h.toString(36); };

  function identity() { return readJSON(LS_ID, null); }

  function setIdentity() {
    const cur = identity() || {};
    const ov = document.createElement("div");
    ov.style.cssText = "position:fixed;inset:0;background:rgba(20,20,30,.55);display:grid;place-items:center;z-index:2147483000;font:14px/1.5 system-ui,sans-serif";
    ov.innerHTML =
      '<div role="dialog" aria-modal="true" aria-label="Who is testing" style="background:#fff;color:#1a1a1e;border-radius:14px;max-width:420px;width:92%;padding:22px;box-shadow:0 20px 50px rgba(0,0,0,.3)">' +
      '<h2 style="margin:0 0 4px;font-size:18px">Who’s testing?</h2>' +
      '<p style="margin:0 0 14px;color:#555;font-size:13px">Your notes are shared with the PatronIQ team and attributed to you.</p>' +
      '<label style="font-size:12px;font-weight:700;color:#555">Name</label>' +
      '<input id="piqid-name" type="text" value="' + (cur.name || "").replace(/"/g, "&quot;") + '" placeholder="e.g. John" style="width:100%;margin:6px 0 12px;padding:10px;border:1px solid #ccc;border-radius:8px;font-size:14px" />' +
      '<label style="font-size:12px;font-weight:700;color:#555">Role</label>' +
      '<select id="piqid-role" style="width:100%;margin:6px 0 16px;padding:10px;border:1px solid #ccc;border-radius:8px;font-size:14px">' +
      ROLES.map((r) => '<option' + (cur.role === r ? " selected" : "") + ">" + r + "</option>").join("") + "</select>" +
      '<div style="display:flex;justify-content:flex-end;gap:8px"><button id="piqid-save" style="background:#67338E;color:#fff;border:0;border-radius:8px;padding:10px 16px;font-weight:700;cursor:pointer">Save</button></div></div>';
    document.body.appendChild(ov);
    const nm = ov.querySelector("#piqid-name"); nm.focus();
    ov.querySelector("#piqid-save").onclick = () => {
      const name = nm.value.trim() || "Anonymous";
      const role = ov.querySelector("#piqid-role").value;
      localStorage.setItem(LS_ID, JSON.stringify({ name, role }));
      ov.remove(); renderChip(); sync();
    };
  }

  function renderChip() {
    let chip = document.getElementById("piq-id-chip");
    if (!chip) {
      chip = document.createElement("button");
      chip.id = "piq-id-chip";
      chip.style.cssText = "position:fixed;left:14px;bottom:14px;z-index:2147482000;background:#fff;border:1px solid #cbb3de;color:#46166B;border-radius:999px;padding:7px 13px;font:12px/1 system-ui,sans-serif;font-weight:600;cursor:pointer;box-shadow:0 4px 14px rgba(70,22,107,.15)";
      chip.onclick = setIdentity;
      document.body.appendChild(chip);
    }
    const id = identity();
    chip.textContent = id ? "🧑 " + id.name + " · " + id.role : "🧑 Set who you are";
  }

  async function postNote(rec) {
    try {
      const r = await fetch(SINK, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(rec), keepalive: true });
      return r.ok;
    } catch { return false; }
  }

  async function sync() {
    const id = identity();
    if (!id) return; // need attribution first
    const notes = readJSON(LS_NOTES, []);
    if (!Array.isArray(notes) || !notes.length) return;
    const synced = new Set(readJSON(LS_SYNCED, []));
    for (const n of notes) {
      const text = typeof n === "string" ? n : (n.text || "");
      const context = typeof n === "object" ? (n.context || "") : "";
      if (!text) continue;
      const key = hash(id.name + "|" + text + "|" + context);
      if (synced.has(key)) continue;
      const ok = await postNote({ who: id.name, role: id.role, app: APP, context, text, ts: new Date().toISOString() });
      if (ok) { synced.add(key); localStorage.setItem(LS_SYNCED, JSON.stringify([...synced])); }
    }
  }

  function push(text, context) {
    if (!text) return;
    const notes = readJSON(LS_NOTES, []);
    notes.push({ text, context: context || APP });
    localStorage.setItem(LS_NOTES, JSON.stringify(notes));
    sync();
  }

  window.PIQNotes = { push, identity, setIdentity, sync };

  function boot() {
    renderChip();
    if (!identity()) setIdentity();
    sync();
    setInterval(sync, 15000);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") sync(); });
    window.addEventListener("pagehide", sync);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
