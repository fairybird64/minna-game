# WORKFLOW.md — Minna Journey Team Pipeline

## Purpose
ไฟล์นี้กำหนด pipeline มาตรฐานสำหรับการทำงานร่วมกันของทีม Minna Journey เพื่อให้ทุก phase เดินจาก source of truth เดียวกัน

---

## Core Working Model

- repo = single source of truth
- คุณ = clinical judgment + final sign-off
- GPT = priority + governance + task breakdown
- Claude = narrative review + emotional QA + wording
- Claude Code = implementation + repo work
- Gemini = visuals

ไม่มี AI ตัวใดทำหน้าที่แทนมนุษย์ในเรื่อง
clinical judgment, final sign-off, และ product direction

---

## Standard Pipeline

### Phase 1 — Define (GPT)
Tasks: ตีโจทย์, ระบุ priority, scope, risk, sensitivity
Output: task brief + scope boundary + sensitivity note
Owner: GPT + คุณ

### Phase 2 — Draft Content (Claude)
Tasks: ร่าง scene, dialogue, inner voice, badge, summary,
       share-safe quote, sensitivity note, bridge copy
Required: docs/templates/TRACK_SPEC_TEMPLATE.md
Output: docs/tracks/TRACK_SPEC_Txx.md
Owner: Claude

### Phase 3 — Clinical / Product Review (Human)
Tasks: ตรวจ framing, wording, containment,
       character fidelity, safety, bridge copy
Output: approved / revise + review note
Owner: คุณ (+ ทีม review เมื่อจำเป็น)
GATE: ต้องผ่านก่อน Phase 4 และ Phase 5 เสมอ

### Phase 4 — Visuals (Gemini)
Tasks: สร้าง B1 ก่อน lock character,
       B2–B4 ใช้ B1 เป็น reference,
       badge 3 states
Output: scene files + badge files
Owner: Gemini

### Phase 5 — Implement (Claude Code)
Tasks: เพิ่ม track ใน tracks.js,
       เพิ่ม home card / badge popup / summary,
       เชื่อม room / share card / passive exit,
       merge เข้า main
Rule: implement ตาม spec เท่านั้น
      ห้ามเปลี่ยน clinical/content logic เอง
Output: code merged to main + deploy checked
Owner: Claude Code

### Phase 6 — Review / Playtest (Human + Team)
Tasks: ทดสอบ flow จริง, ใช้ playtester checklist,
       เช็ก badge / summary / share card / exit path,
       เช็ก room label ถูก protagonist,
       เช็ก deploy
Output: playtest notes + approve / revise
Owner: คุณ + ทีม

---

## Mandatory Gates

Gate A — Before Visuals
ห้ามเริ่มทำภาพถ้า Phase 3 ยังไม่ approve

Gate B — Before Implementation
ห้าม implement ถ้า spec ยังไม่ครบ,
wording ยังไม่ lock,
หรือ sensitive track ยังไม่ผ่าน review

Gate C — Before Live
ห้ามถือว่างานเสร็จถ้ายังไม่ merge เข้า main,
ผ่าน review, เช็ก deploy, และบันทึก changelog

---

## Working Rules

1. Repo is the source of truth
2. Docs first, then code
3. No majority vote — มนุษย์ตัดสินเมื่อ AI เห็นต่าง
4. Claude Code is implementation only
5. Character Bible overrides draft creativity
6. Safety overrides cleverness

---

## Files to Check in Every New Task

Source of truth:
- docs/00_PRODUCT_PRINCIPLES_v1.0.md
- docs/01_SAFETY_BY_DESIGN_v1.1.md
- docs/02_MASTER_DOCUMENT_v2.4.md
- docs/03_DOCUMENT_HIERARCHY_OPERATING_RULES_v1.0.md

Working template:
- docs/templates/TRACK_SPEC_TEMPLATE.md

Future templates (เมื่อพร้อม):
- docs/templates/PRE_MERGE_CHECKLIST.md
- docs/templates/PLAYTESTER_CHECKLIST.md

---

## Minimal Example Workflow

สร้าง track ใหม่:
1. GPT define theme / scope / sensitivity
2. Claude ร่าง TRACK_SPEC_Txx.md
3. คุณ review และ sign off
4. Gemini ทำภาพ
5. Claude Code implement
6. คุณ review หน้า live
7. ถ้าผ่าน → เสร็จ

---

## Final Working Statement

docs = source of truth
human = final authority
AI แต่ละตัวทำหน้าที่ต่างกันจาก repo และ docs ชุดเดียวกัน
ทุกงานต้องผ่าน define → draft → review → implement → playtest
