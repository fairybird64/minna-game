# Minna Journey — Document Hierarchy & Operating Rules v1.0
## Governing Document for Team Alignment, Decision-Making, and Workflow

**Document status:** Locked draft for working reference  
**Owner:** Clinical / Product Director  
**Applies to:** Human team + GPT + Claude + Claude Code + Gemini  
**Scope:** Minna Lab / Minna Beta / Minna Live in Nong Hug

---

## 1. Purpose of This Document

เอกสารฉบับนี้มีไว้เพื่อทำให้การพัฒนา Minna Journey เดินไปในทิศทางเดียวกันอย่างต่อเนื่อง ลดการพัฒนาแบบกระจัดกระจาย ลดความคลาดเคลื่อนระหว่าง AI แต่ละตัว และทำให้ทุกการตัดสินใจอ้างอิงจากกฎชุดเดียวกัน ไม่ใช่จาก intuition เฉพาะรอบสนทนาใดรอบสนทนาหนึ่ง

จากจุดนี้ไป การทำงานของ Minna ต้องเปลี่ยนจาก “คิดและทำไปเรื่อย ๆ” เป็น “ทำงานภายใต้ระบบที่ล็อกแล้ว”

---

## 2. Core Principle

> ทุกคนและทุก AI ทำงานจากเอกสารหลักเดียวกัน  
> และถ้า output ใหม่ขัดกับเอกสารหลัก ให้ถือว่า output นั้นผิด ไม่ใช่เอกสารถูก override

หลักนี้ใช้เพื่อป้องกันไม่ให้
- AI ตีความ clinical logic เอง
- feature ใหม่หลุดจากแกน product
- wording หลุดจาก safety rule
- implementation เร็วกว่า governance

---

## 3. Document Hierarchy

### Level 1 — Constitutional Documents
เอกสารระดับสูงสุดของโครงการ

#### 1) Product Principles
หน้าที่:
- กำหนดว่า Minna คืออะไร
- ไม่ใช่อะไร
- จะเติบโตอย่างไร
- ใช้อะไรตัดสินเมื่อมีข้อเสนอใหม่

#### 2) Safety by Design Framework v1.1
หน้าที่:
- กำหนดขอบเขต safety ของ content, UX, wording, exit path, share card, psychoeducation framing
- ล็อกว่า Minna ใช้ design ไม่ใช้ detection
- ล็อก pre-merge, playtester, home guidance, passive exit, และ integration กับ Nong Hug

---

### Level 2 — Operating Documents
เอกสารระดับปฏิบัติการ

#### 3) Master Document v2.4
หน้าที่:
- choice system
- UX mechanics per track
- character bible
- track status
- badge/share card spec
- safety architecture
- product governance
- workflow
- roadmap และ priorities

#### 4) Track Spec Documents
หน้าที่:
- ใช้ทำงานราย track
- ระบุ protagonist, theme, B1–B4, choice, badge, summary, share-safe wording, sensitivity note, reviewer sign-off

#### 5) Backlog / Changelog
หน้าที่:
- เก็บ feature list
- เก็บสิ่งที่กำลังทำ
- เก็บประวัติการเปลี่ยนแปลงก่อน/หลัง release

---

### Level 3 — Execution Artifacts
เอกสารและของใช้หน้างาน

#### 6) Pre-merge Form
#### 7) Playtester Form
#### 8) Prompt templates สำหรับ GPT / Claude / Claude Code / Gemini
#### 9) Asset list / branch log / deploy notes

เอกสารระดับนี้ต้องไม่ขัดกับ Level 1–2

---

## 4. Source of Truth Rule

เมื่อมีความขัดแย้งระหว่าง
- สิ่งที่ AI เสนอ
- สิ่งที่ track draft เขียนมา
- สิ่งที่ทีมเข้าใจ
- สิ่งที่คุยกันปากเปล่า

ให้ยึดลำดับนี้

1. Product Principles  
2. Safety by Design Framework  
3. Master Document v2.4  
4. Track Spec ล่าสุดที่ได้รับอนุมัติ  
5. Changelog / Backlog

### Practical Examples
- ถ้า Claude ร่างฉากดีมากแต่ขัด Character Bible → ต้องแก้
- ถ้า Claude Code implement ได้แต่ขัด safety rule → ห้าม merge
- ถ้า Gemini สร้างภาพสวยแต่หลุด visual identity → ห้ามใช้
- ถ้า GPT เสนอ framework ใหม่แต่ขัดเอกสารที่ lock แล้ว → ต้อง review ก่อน ไม่ใช้ทันที

---

## 5. Team Operating Model

### 5.1 Roles

| Role | Owner | Responsibility |
|---|---|---|
| Clinical / Product Director | คุณ | final decision, clinical safety, product direction |
| Strategic & Governance | GPT | system direction, prioritization, governing docs, challenge risk |
| Narrative & Theme Writer | Claude | track drafting, dialogue, emotional arc, character voice |
| Implementation Engineer | Claude Code | code implementation, branch, merge, deploy |
| Visual & Asset Generator | Gemini | scene art, badge art, share visuals |

### 5.2 AI Decision Rule
> ถ้า AI 2 ตัวเห็นต่างกัน ให้ใช้ clinical judgment + product direction ของมนุษย์เป็นหลัก  
> ไม่ใช้ majority vote

### 5.3 Non-negotiable Rule
AI ทุกตัวมีสิทธิ์เสนอ  
แต่ไม่มีตัวใดมีสิทธิ์ override
- Clinical / Product Director
- Product Principles
- Safety Framework
- Character Bible

---

## 6. Environment Rules

### 6.1 Minna Lab
- พื้นที่ทดลอง
- เปลี่ยนได้ทุกวัน
- ใช้กับคุณ + ทีม AI
- ของใน Lab ยังไม่ถือเป็น production truth

### 6.2 Minna Beta
- ใช้กับกลุ่มเล็ก
- ต้องผ่าน pre-merge และ sensitivity review
- ต้องมี passive exit, home guidance, playtester checklist

### 6.3 Minna Live in Nong Hug
- ใช้กับเด็กจริง
- ต้องนิ่ง
- ต้องผ่าน review
- ต้องมี changelog + version
- ต้องไม่เปลี่ยนทุกวัน

### 6.4 Core Release Rule
> พัฒนาเร็วได้ใน Lab  
> แต่ของที่อยู่ในมือเด็กจริงต้องปล่อยเป็นรอบ

---

## 7. Operating Rules for New Work

### 7.1 ทุก feature ใหม่ต้องตอบ 5 คำถามก่อนเริ่ม
1. อยู่ใน engine ไหนของเกม
2. เพิ่มคุณค่าต่อเด็กอย่างไร
3. เสี่ยงต่อ safety หรือไม่
4. ใช้ effort เท่าไร
5. ควรอยู่ใน Lab / Beta / Live ระดับไหน

### 7.2 ทุก track ใหม่ต้องมี spec ก่อนทำภาพและโค้ด
ห้ามกระโดดไป implement ก่อนที่ content spec จะครบ

### 7.3 Claude Code = implement only
Claude Code มีหน้าที่ implement ตาม spec เท่านั้น
- ห้าม rewrite narrative meaning เอง
- ห้ามเปลี่ยน badge wording เอง
- ห้ามเปลี่ยน safety wording เอง
- ห้ามเปลี่ยน UX logic นอก scope โดยไม่ได้รับคำสั่ง

### 7.4 งานที่แตะ safety-sensitive content ต้องผ่าน review เพิ่ม
โดยเฉพาะ track ที่แตะ
- disclosure
- rejection
- family wound
- identity
- NSSI / substance / crisis psychoed
ต้องผ่าน sensitivity note + gentle notice + bridge copy ตาม framework

---

## 8. Standard Workflow for New Tracks

### Step 1 — Draft Content
ต้องครบก่อนเสมอ
- scene + dialogue + inner_voice
- badge_good / badge_else / badge_stuck
- summary_reflection
- shareCard
- sensitivity note
- gentle notice needed? yes/no
- bridge copy needed? yes/no

### Step 2 — Clinical / Governance Review
- เช็ค Product Principles
- เช็ค Safety Framework
- เช็ค Character Bible
- เช็คว่า inner voice ไม่กลายเป็น hallucination
- เช็คว่า stuck ไม่ถูกทำให้ดูแย่

### Step 3 — Generate Visuals
- B1 ก่อนเพื่อ lock character
- B2–B4 อ้าง B1
- badge 3 state ตาม rule เดิม
- visual tone ต้องคง style base เดียวกัน

### Step 4 — Implement
Claude Code ทำเป็น 2 part
- Part 1: `tracks.js`
- Part 2: `index.html` / popup / summary / room

### Step 5 — Pre-merge Check
ผ่าน checklist ก่อน merge

### Step 6 — Merge to Main
ไม่มีงานใดถือว่าเสร็จจนกว่า merge เข้า `main` แล้ว

### Step 7 — Beta / Live Decision
ขึ้นอยู่กับ review status ไม่ใช่แค่ว่า “โค้ดทำงาน”

---

## 9. Mandatory Working Templates

หลังจากล็อก hierarchy นี้แล้ว ต้องมี template ใช้งานจริง 3 ตัวทันที

### 9.1 Track Spec Template
ใช้กับทุก track ใหม่

ขั้นต่ำต้องมี:
- Track ID / title
- protagonist
- theme / cluster
- core message
- B1–B4
- inner voice framing
- badge 3 state
- summary reflection
- share-safe card
- content sensitivity note
- gentle notice / bridge copy
- reviewer sign-off

### 9.2 Pre-merge Form
ใช้ก่อน merge ทุกครั้ง

### 9.3 Playtester Form
ใช้กับ internal reviewer / ครู / เด็กอาสา

---

## 10. Benchmark Tracks

### 10.1 T15 = Gold Standard System Track
ใช้เป็นแม่แบบด้าน
- ensemble writing
- gratitude / belongingness
- summary quality
- share-safe tone
- multi-voice balance

### 10.2 T16 = Gold Standard Safety-sensitive Track
ใช้เป็นแม่แบบด้าน
- disclosure
- rejection
- self-compassion
- layered inner voice
- gentle notice / bridge copy / containment

### 10.3 Rule
หากจะทำ track ใหม่ที่มี complexity สูง  
ให้เทียบกับ T15/T16 ก่อนเสมอ

---

## 11. Priority Rule

### 11.1 ห้ามข้าม priority stack
AI หรือทีมงานห้ามดึง feature later มาทำก่อน feature current โดยไม่มีการอนุมัติใหม่

### 11.2 Pending Design Decision ยังไม่ถือว่าเริ่มทำได้
เช่น
- replay inner layer
- trilogy unlock logic
- crossover hints

ต้องมี spec ใหม่ก่อน

---

## 12. Merge and Release Rules

### 12.1 Merge Rule
- ทุกงานต้อง merge เข้า `main` ก่อนจึงถือว่า live candidate
- งานค้าง branch = ยังไม่เสร็จ
- ถ้า branch ไม่ merge ห้ามนับเป็น progress

### 12.2 Release Rule
- Lab = daily
- Beta = weekly
- Live = monthly / ตามรอบ release

### 12.3 Changelog Rule
ก่อนเข้า Live ทุกครั้งต้องบันทึก
- เพิ่มอะไร
- แก้อะไร
- track ไหนเปลี่ยน
- wording ไหนเปลี่ยน
- safety note ไหนเปลี่ยน

---

## 13. Working Red Lines

ห้าม
1. ใช้ stuck count เป็น crisis proxy
2. ทำ trigger-based soft exit
3. ใช้ clinical risk tier เป็นแกนของ Minna
4. เปิด open-ended therapeutic roleplay
5. ใส่ method detail สำหรับ NSSI / substance / crisis
6. ใช้ wording ที่ shame เด็ก
7. ให้ AI เปลี่ยน clinical/content logic เองตอน implement
8. ปล่อยของใน Live โดยไม่มี changelog / version / review

---

## 14. Human Review Rules

### 14.1 สิ่งที่ต้อง review โดยมนุษย์เสมอ
- track sensitive
- inner voice
- summary reflection
- bridge copy
- share-safe card
- onboarding / resource footer
- badge wording ที่แตะ shame / identity / disclosure

### 14.2 Reviewer Chain
- Clinical / Product Director
- ทีม Satir / CAP review team เมื่อจำเป็น
- AI เป็นผู้ช่วย review ไม่ใช่ final approver

---

## 15. Claude Code Session Rule

ทุกครั้งที่เริ่ม session ใหม่กับ Claude Code ให้ย้ำ 5 เรื่องนี้เสมอ
1. Source of truth คืออะไร
2. Claude Code ทำหน้าที่ implement only
3. งานรอบนี้มี scope แค่ไหน
4. Acceptance criteria คืออะไร
5. ต้อง merge เข้า `main` ก่อนจบงาน

### Suggested starter reminder
- Use Product Principles, Safety by Design Framework, and Master Document as source of truth
- Do not change clinical/content logic unless explicitly asked
- Do not expose internal good/else/stuck logic to players
- Preserve protagonist-specific room labels
- Merge into main before finishing

---

## 16. Immediate Next Actions

### Step 1
Lock เอกสาร 4 ตัวเป็น source of truth
- Product Principles
- Safety by Design Framework v1.1
- Master Document v2.4
- Document Hierarchy & Operating Rules v1.0

### Step 2
สร้าง template 3 ตัว
- Track Spec Template
- Pre-merge Form
- Playtester Form

### Step 3
ใช้ T15 และ T16 review ระบบจริง
- T15 = system benchmark
- T16 = safety-sensitive benchmark

### Step 4
เริ่มใช้กติกานี้กับทุก session ของ GPT / Claude / Claude Code / Gemini

---

## 17. Final Working Statement

Minna Journey จะพัฒนาต่อจากนี้ภายใต้เอกสารหลักที่ล็อกแล้ว ไม่ใช่จาก intuition รายรอบ  
ทุก AI และทุกคนต้องทำงานจาก document hierarchy เดียวกัน  
คุณเป็น final decision maker  
Character Bible, Product Principles, Safety Framework, และ Master Document เป็น source of truth  
และทุก track / feature ใหม่ต้องผ่าน workflow, template, และ review ก่อนเข้าสู่ Beta หรือ Live

---

## Version Note

**Minna Journey — Document Hierarchy & Operating Rules v1.0**

ฉบับนี้จัดทำขึ้นเพื่อ
- ล็อกลำดับชั้นเอกสาร
- ล็อก operating model ของทีม AI + คน
- ล็อก workflow สำหรับการสร้าง track / merge / release
- กำหนดให้ T15 และ T16 เป็น benchmark track
- ทำให้การพัฒนา Minna เดินไปทางเดียวกันอย่างต่อเนื่อง
