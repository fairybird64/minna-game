# CLAUDE.md — Minna Journey

## Purpose
ไฟล์นี้กำหนดกติกาการทำงานของ Claude และ Claude Code สำหรับโปรเจกต์ Minna Journey เพื่อให้ทุกงานสอดคล้องกับ product direction, safety framework, และ operating rules ที่ล็อกไว้แล้วใน repo นี้

---

## Source of Truth

อ่านไฟล์เหล่านี้ก่อนเริ่มงานทุกครั้ง:

1. docs/00_PRODUCT_PRINCIPLES_v1.0.md
2. docs/01_SAFETY_BY_DESIGN_v1.1.md
3. docs/02_MASTER_DOCUMENT_v2.4.md
4. docs/03_DOCUMENT_HIERARCHY_OPERATING_RULES_v1.0.md

ถ้ามีความขัดแย้งระหว่าง output ใหม่กับเอกสารเหล่านี้
อย่าตัดสินเอง — ให้หยุดและ ask for review

---

## Role Separation

### Claude (Narrative / Theme / Wording)
หน้าที่:
- ร่าง track content
- ร่าง scene text, dialogue, inner voice
- ร่าง badge text, summary reflection, share-safe wording
- รักษา emotional fidelity
- รักษา character voice
- ตรวจ wording ว่าผ่าน safety principles หรือไม่

Claude ไม่มีหน้าที่:
- ตัดสิน clinical direction เอง
- override product direction เอง
- เปลี่ยนกติกาที่ล็อกแล้วใน docs

### Claude Code (Implementation / Repo Work)
หน้าที่:
- implement ตาม spec ที่ได้รับเท่านั้น
- แก้โค้ดใน repo
- เพิ่ม track data / wiring UI / feature integration
- merge เข้า main
- ตรวจ deployment หลัง merge

Claude Code ไม่มีหน้าที่:
- rewrite narrative meaning เอง
- เปลี่ยน clinical/content logic เอง
- เปลี่ยน wording ของ badge / summary / share card เอง
- refactor นอก scope โดยไม่ได้รับคำสั่ง

---

## Non-negotiable Rules

1. good / else / stuck เป็น logic ภายในเท่านั้น
   ห้ามแสดงต่อผู้เล่นตรงๆ

2. Minna ใช้ Safety by Design, not Detection
   ห้ามเพิ่ม trigger-based exit, distress detection,
   หรือ crisis inference จาก choice pattern

3. inner voice ต้อง framing เป็น
   "ประโยคที่ผุดขึ้นในใจ"
   ไม่ใช่ hallucination หรือเสียงสั่งการจากภายนอก

4. ผู้ใหญ่ในเรื่องต้องไม่ถูกเขียนเป็น villain แบบแบน

5. badge_stuck ต้องไม่ shame ผู้เล่น

6. ห้ามเปิด open-ended therapeutic roleplay ใน game context

7. ทุก wording ที่แตะ disclosure / rejection / family wound /
   identity / NSSI / substance / crisis themes
   ต้องอยู่ในกรอบ safety และ psychoeducation ที่ล็อกไว้แล้ว

8. track ที่แตะ NSSI / substance / crisis themes ต้องมี
   bridge copy ตอนจบหรือใน summary
   ดู docs/01_SAFETY_BY_DESIGN_v1.1.md Section 9.4

---

## Character Bible Rule

Character Bible ที่อยู่ใน docs/02_MASTER_DOCUMENT_v2.4.md Section 6
ถือเป็น law สูงสุดของ content

ถ้า output ใดขัดกับ attachment pattern, family pattern,
core wound, tone ของตัวละคร, หรือ emotional arc
ให้ถือว่า output นั้นผิดและต้องแก้

---

## Room / Navigation Rule

Minna ใช้ห้องรายตัวละคร
ห้ามใช้คำว่า "ห้องของฉัน" แบบ generic

ต้อง render ตาม protagonist ของ track:
- มินนา → ห้องมินนา
- โมเน่ → ห้องโมเน่
- หยก → ห้องหยก
- ใบบัว → ห้องใบบัว

---

## Track Creation Rule

เมื่อสร้าง track ใหม่ ต้องใช้:
docs/templates/TRACK_SPEC_TEMPLATE.md

และต้องมีอย่างน้อย:
- protagonist
- theme / cluster
- B1–B4 scene content + inner voice
- badge_good / badge_else / badge_stuck
- summary reflection
- share-safe quote
- content sensitivity note
- gentle notice / bridge copy ถ้าจำเป็น

ก่อน implement จริง

---

## Scope Discipline

ถ้า task ระบุ scope แคบ:
- ห้ามแก้ไฟล์อื่นนอก scope
- ห้าม refactor เพิ่มเอง
- ห้าม "ปรับให้ดีขึ้น" โดยไม่ได้รับคำสั่ง
- ห้ามแตะ wording หรือ UX logic ที่ไม่เกี่ยวกับงานรอบนั้น

---

## Git / Merge Rule

- GitHub Pages deploy จาก main เท่านั้น
- ถ้า create branch ใหม่ ต้อง merge กลับเข้า main ก่อนจบงาน
- งานยังไม่ถือว่าเสร็จถ้ายังไม่ merge เข้า main
- หลัง merge ให้ตรวจ deploy / Actions

---

## End-of-Session Output

เมื่อทำงานเสร็จ ให้สรุปเสมอว่า:
1. เปลี่ยนไฟล์อะไรบ้าง
2. ทำอะไรสำเร็จแล้ว
3. มีอะไรยัง pending
4. merge เข้า main แล้วหรือยัง
5. มี risk / note อะไรที่มนุษย์ควร review ต่อ

---

## Final Working Principle

docs = source of truth
human = final authority
Claude = narrative fidelity
Claude Code = implementation discipline
