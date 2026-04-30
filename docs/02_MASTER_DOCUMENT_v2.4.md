# MASTER DOCUMENT — Minna Journey  
## ฉบับสมบูรณ์ v2.4  
**Updated:** T17 Complete + T(ใบบัว) Draft + Badge Share Card Spec + Safety Architecture + Product Governance

---

## 1. Project Info

- **Repo:** fairybird64/minna-game
- **Live:** https://fairybird64.github.io/minna-game/
- **Stack:** `index.html` + `assets/js/tracks.js` + `assets/`
- **Actions:** https://github.com/fairybird64/minna-game/actions

---

## 2. File Structure

- `index.html` — UI + game logic
- `assets/js/tracks.js` — scene data ทุก track
- `assets/badges/`
- `badge_t[1-10]_stuck/else/good.jpg`
- `badge_t[11+]_stuck/else/good.jpg` — ROOT
- `story[N]_b[1-4].jpg` — ROOT ทั้งหมด
- `assets/corkboard.jpg`
- `assets/mood/mood_1-5.jpg`

```javascript
function badgePath(id, state) {
  const n = Number(id);
  if (n >= 11) return 'badge_t' + id + '_' + state + '.jpg';
  return 'assets/badges/badge_t' + id + '_' + state + '.jpg';
}
````

---

## 3. Choice System

### 3.1 Choice Tags

* `good` = ทางเลือกที่ตรงกับตัวเอง (congruent)
* `else` = ทางเลือกกลางๆ (เริ่มรับรู้)
* `stuck` = ทางเลือกที่ติดอยู่ (self-protection)

### 3.2 Core Rule

**stuck ≠ ผิด**
คือ honest survival response
ไม่มีภาษาหรือ visual ใดที่ทำให้รู้สึกแย่กับการเลือก stuck

### 3.3 UX Mechanics Per Track (Standard)

#### A. Choice → Badge Popup

แต่ละ scene (b1–b4) มี 3 choice: `good / else / stuck`

เมื่อผู้เล่นเลือก → badge popup แสดง:

* ชื่อ badge
* คำอธิบาย 1–2 ประโยค
* ปุ่ม “แชร์”
* ปุ่ม “บันทึก”

#### B. Summary Page

แสดง choice ที่เลือกแต่ละ scene (b1–b4) พร้อม tag สี

มี:

* กล่องข้อความสะท้อนการเรียนรู้ของ protagonist
* ปุ่ม “สร้างการ์ดแชร์” (หลัง share card feature implement)

#### C. Inner Voice Rendering

ใช้ `voiceLabel` ใน `tracks.js` แยก `.inner-voice` กับ `.dialogue-voice`

**Rule:**
inner voice = “ประโยคที่ผุดขึ้นในใจ”
ไม่ใช่ auditory hallucination

#### D. Badge Format มาตรฐาน

```text
badge_good: "[ชื่อ badge]" / "[คำอธิบาย 1-2 ประโยค]"
badge_else: "[ชื่อ badge]" / "[คำอธิบาย 1-2 ประโยค]"
badge_stuck: "[ชื่อ badge]" / "[คำอธิบาย 1-2 ประโยค]"
summary_reflection: "[2-3 ประโยค สะท้อน arc ของ protagonist]"
```

---

## 4. Branch / Deploy

* งานทั้งหมดต้อง **merge เข้า `main`** ก่อน GitHub Pages จึง deploy
* Claude Code มักสร้าง branch ใหม่ → ต้องสั่ง merge เข้า `main` เสมอ
* เช็ค deploy ที่: [https://github.com/fairybird64/minna-game/actions](https://github.com/fairybird64/minna-game/actions)

---

## 5. Cork Board System

* Track 1–10: grid 4×3 (12 slots)
* Track 11–20: grid 5×4 (20 slots) — ขยาย height อัตโนมัติ
* ใช้ `grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))` เพื่อ responsive
* Badge slot ที่ยังไม่ unlock แสดงเป็น `?` placeholder (dim)
* มี **per-character rooms 5 tabs** พร้อม per-room counter
* Badge image size: `90×90px` ทุก slot
* `T3 hidden: true` — badge slot ยังอยู่บน cork board เป็น faded `?`

**หมายเหตุ:**
ระบบห้องใช้เป็น **ห้องรายตัวละคร** เช่น ห้องมินนา ห้องโมเน่ ห้องหยก ห้องใบบัว
ไม่ใช้ห้องรวมแบบ “ห้องของฉัน”

---

## 6. Character Bible v1.0

### 6.1 ตัวละครเด็กหลัก

#### มินนา

* Pooh Mapping: Pooh
* หญิง 14–15 ปี ผมยาวสีน้ำตาล
* ครอบครัวอบอุ่น
* Attachment: Secure
* Core Pattern: รู้สึกมีคุณค่าโดยไม่ต้องพิสูจน์
* Inner Voice: “เธอเป็นตัวเองก็พอแล้ว”

#### โมเน่

* Pooh Mapping: Piglet
* ชาย 13 ปี ผมสั้นดำ
* น้องมินนา / ชายรักชาย
* ครอบครัวอบอุ่น
* Attachment: Secure
* Core Pattern: กล้าเป็นตัวเอง
* Inner Voice: “ฉันรับได้ถึงแม้คนอื่นจะไม่”

#### หยก

* Pooh Mapping: Rabbit
* หญิง 14–15 ปี tomboy undercut สีน้ำเงิน
* ครอบครัวหมอ เป๊ะ รวย ห่างเหิน
* Attachment: Anxious-conditional
* Core Pattern: Perfectionism + people-pleasing
* Inner Voice: “พี่นุ้ยทำได้แล้วหยกล่ะ?”

#### ใบบัว

* Pooh Mapping: Eeyore
* หญิง 14–15 ปี ผมสั้น bob สีดำ
* โตกับยาย + น้า
* Attachment: Anxious-avoidant
* Core Pattern: ลดความคาดหวังตัวเอง suppress emotion
* Inner Voice: “อย่าเด่นจะเป็นภัย”

### 6.2 ครอบครัวมินนา-โมเน่

#### แม่นุ่น

* Kanga
* Secure base หลัก
* Secure / heal แล้ว
* ฟังจริงๆ

#### พ่อนัท

* Owl
* Secure base สนับสนุน
* Secure / รู้เยอะ บางทีอธิบายแทนฟัง

### 6.3 ครอบครัวหยก — Family Rules (Implicit)

* “ความรู้สึกไม่ใช่ข้อมูล — ผลลัพธ์ต่างหากที่บอกว่าโอเค” → suppress emotion
* “รักคือการเป็นห่วง และการเป็นห่วงคือการชี้ว่าอะไรยังไม่พอ” → conditional love
* “คนในบ้านนี้ไม่บ่น ไม่ขอ แก้ปัญหาเอง” → people-pleasing

### 6.4 ครอบครัวใบบัว — Family Rules (Implicit)

* จากยาย: “อย่าเด่น จะเป็นภัย” / “ทำแบบนั้นไม่ได้” / “ความรู้สึกพูดไม่ได้”
* จากน้า: “อย่าทำให้บ้านวุ่นวาย” / “แก้ปัญหาเงียบๆ เอง”
* จากพ่อแม่ที่ absent: “ถ้าต้องการมากเกินไป — คนจะไป” / “อย่าเป็นภาระ”
* Rule ที่ใบบัวสร้างเอง: “การอยู่รอดคือการไม่เด่น ไม่เดือดร้อน ไม่ต้องการ”

**Core wound:**
ทุกคนในบ้านนี้ผ่านความเจ็บปวดเดียวกัน แต่เลือก cope ต่างกัน — ยายเลือก control, น้าเลือก prove, พ่อแม่เลือก leave

### 6.5 ตัวละครพิเศษ

#### ครูต้น

* Christopher Robin
* คนที่ “เห็น” เด็กในแบบที่เขาเป็น
* ผู้ใหญ่ที่ heal แล้ว

#### มะม่วง

* Tigger (สัตว์)
* แมวส้มตัวอ้วนของมินนา

#### มะพร้าว

* หมาขาวขนฟูของโมเน่

---

## 7. Theme Map — 5 Clusters

### Cluster A — รู้จักตัวเอง (Self-awareness)

* Emotional literacy
* Thought defusion
* Inner critic awareness

### Cluster B — ครอบครัวสร้างเรา

* Listening patterns
* Transgenerational wound
* Humanizing parents

### Cluster C — คุณค่าของตัวเอง

* Good enough
* Perfectionism
* People-pleasing
* Imposter feelings

### Cluster D — ความสัมพันธ์

* Belongingness
* Gratitude
* Friendship
* Safe connection

### Cluster E — การเติบโต

* Small steps
* Self-compassion
* Growth through understanding
* Final resolution

---

## 8. Track Status

* **T1** มินนากับมะม่วง — มินนา — ความคาดหวัง / A — ตุ๊กตาแมว ✅
* **T2** มิตรภาพใหม่ — มินนา — ความกลัวการเริ่มต้น / D — หูฟัง ✅
* **T3** วันที่ดีแบบเรียบง่าย — มินนา — เห็นตัวเอง / C — แก้วโกโก้ 🙈 hidden
* **T4** วันที่เพื่อนล้อ — โมเน่ — ความรู้สึกซ่อนเร้น / A — หมอนอิง ✅
* **T5** ความสัมพันธ์ในครอบครัว — ครอบครัว — บ้านปลอดภัยไหม / B — โคมไฟ ✅
* **T6** โมเน่กับวันเสาร์ที่บ้าน — โมเน่ — ความไม่แฟร์ / A — มะพร้าว ✅
* **T7** หมอน้อย — หยก — ก้าวแรก / C — กระถางต้นไม้ ✅
* **T8** มินนากับวันหลังจากนั้น — มินนา — Shame / A — ผ้าห่ม ✅
* **T9** ใบบัวกับไพ่ที่วางไม่ลง — ใบบัว — Anxiety / A — ไพ่ ✅
* **T10** ห้องของมินนา — มินนา — Reflection / A — กรอบรูป ✅
* **T11** วันที่โมเน่นั่งเงียบ — โมเน่ — LGBTQ+ self-acceptance / C — ผีเสื้อ ✅
* **T12** ใบบัวกับฟีดที่ไม่มีวันหมด — ใบบัว — FOMO + Imposter / A,C — เมล็ดพันธุ์ ✅
* **T13** วันที่หยกต้องสมบูรณ์แบบ — หยก — Perfectionism / C — ดอกลิลลี่ ✅
* **T14** วันที่หยกรับคำชมไม่ได้ — หยก — People-pleasing / C — ดอกทานตะวัน ✅
* **T15** คืนที่บ้านมินนา — Ensemble — Gratitude / D — ดอกไม้แห้ง ✅
* **T16** ใบบัวกับเสียงในใจ — ใบบัว — Self-compassion / C — สมุดบันทึก ✅
* **T17** วันที่โมเน่รู้แล้ว — โมเน่ — Academic pressure / E — รองเท้าผ้าใบ ✅ implement แล้ว
* **T(ใบบัว)** เช้าที่ใบบัวเห็นยาย — ใบบัว — Ambiguous loss + หยุดดิ้นรน / B,E — ถ้วยชา 🔲 draft พร้อม
* **T(มินนา)** — มินนา — Online self vs real self / A — 🔲
* **T(โมเน่)** — โมเน่ — 🔲
* **T(หยก-1)** — หยก — 🔲
* **T(หยก-2)** — หยก — 🔲
* **T(ใบบัว-2)** — ใบบัว — 🔲
* **T24** ครูต้น — Ensemble — Final resolution / E — 🔲

---

## 9. Badge Share Card System (v2.4 — Spec Locked)

### หลักการ

* Share card = 1 ใบ / 1 track completion เท่านั้น
* Determinant = **B4 choice** (จุดยืนสุดท้ายของ track)
* Visual = emoji object คงที่ประจำ track + quote text ตาม B4 state
* ไม่แสดง label `good / else / stuck` บนการ์ด
* ไม่ใช้ badge image files ในการ์ด (badge image อยู่ในเกมเท่านั้น)
* Render PNG ผ่าน Canvas API

### เหตุผล

* ไม่ลงโทษความซื่อสัตย์
* badge stuck ถูกออกแบบให้ dim — ถ้าเอาขึ้น social จะส่ง signal ผิด
* ทุก state share ได้อย่างมีศักดิ์ศรี
* internal data ยังเก็บครบ B1–B4 สำหรับวิจัยและ analytics

### Data Model

#### Internal track record (analytics / research)

* `b1_choice`
* `b2_choice`
* `b3_choice`
* `b4_choice`
* `full_path`

#### Public share output

* `track_id`
* `track_emoji`
* `b4-derived quote`
* `neutral footer`

### UX Rules

* ปุ่ม Share แสดงเฉพาะหลังเล่นจบ track
* หน้า summary มีปุ่ม “สร้างการ์ดแชร์”
* Scene badges ยังอยู่เหมือนเดิมใน popup / summary — ไม่เปลี่ยน

---

## 10. Badge Writing Framework

### 10.1 Framework Badge Text (3 ชั้น)

1. ชื่อ badge → strength-based, 2–3 คำ, เท่กระชับ
2. คำใต้ชื่อ → honest moment, specific, raw — ไม่ปลอบ ไม่สอน
3. inspired by → Pooh wisdom + Satir belief (ใช้เป็น seed ไม่ quote ตรงๆ)

### 10.2 Satir Beliefs ที่ใช้ใน Badge Writing

1. การเปลี่ยนแปลงเป็นไปได้เสมอ
2. ทุกคนมีทรัพยากรภายในที่พอสำหรับการเติบโต
3. ปัญหาไม่ใช่ปัญหา วิธีที่รับมือต่างหากที่เป็นปัญหา
4. ความรู้สึกเป็นของเรา เราเลือกได้ว่าจะทำอะไรกับมัน
5. เราเปลี่ยนอดีตไม่ได้แต่เปลี่ยนผลที่อดีตมีต่อเราได้
6. คนมีพื้นฐานที่ดี
7. ความหวังคือส่วนประกอบสำคัญของการเปลี่ยนแปลง
8. coping สะท้อน self-worth

### 10.3 Pooh Wisdom ที่ใช้ใน Badge Writing

* “What day is it? Today. My favourite day.”
* “Rivers know this: there is no hurry.”
* “The things that make me different are the things that make me, me.”
* “I always get to where I'm going by walking away from where I've been.”
* “Weeds are flowers, too, once you get to know them.”

---

## 11. T17 — วันที่โมเน่รู้แล้ว ✅ IMPLEMENTED

* Protagonist: โมเน่
* Theme: Academic pressure / E
* Badge: รองเท้าผ้าใบ

### Share Card

```javascript
shareCard: {
  emoji: "👟",
  lines: {
    good: "ฟังเขาได้ — แล้วก็ยังเลือกของตัวเองได้",
    else: "ข้างในชัดแล้ว แต่ยังไม่ถึงเวลาพูด",
    stuck: "ยังไม่แน่ใจในตัวเอง เลยลองเชื่อคนอื่นไว้ก่อน"
  },
  footer: "— Minna Journey"
}
```

### Summary Reflection

โมเน่รู้ตั้งแต่ต้นว่าสอบครั้งนี้ไม่ได้เริ่มต้นด้วยดี
แต่ก็ยังทำในสิ่งที่ทำได้
มันออกมาไม่สวย
แต่โมเน่รู้ว่าความผิดพลาดไม่ใช่จุดสิ้นสุด
มันแค่บอกว่าจะเริ่มจากตรงไหนครั้งหน้า
และคำตอบนั้น — โมเน่มีอยู่แล้ว

---

## 12. T(ใบบัว) — เช้าที่ใบบัวเห็นยาย (Draft พร้อม Implement)

* Protagonist: ใบบัว
* Theme: Ambiguous loss + หยุดดิ้นรน / B,E
* Badge: ถ้วยชา
* Satir connection: เชื่อมกับตัวเอง → เชื่อมกับคนอื่น → เชื่อมกับโลก
* Core message: ไม่ใช่การให้อภัย แต่คือการเลือกอยู่กับความจริงโดยไม่ดิ้นรน

### Share Card

```javascript
shareCard: {
  emoji: "🍵",
  lines: {
    good: "นี่ไม่ใช่การยอมแพ้ — แต่คือการเลือกที่จะหยุดต่อสู้กับสิ่งที่เปลี่ยนไม่ได้",
    else: "ยังไม่รู้จะเรียกมันว่าอะไร — แต่รู้สึกเบากว่าเมื่อวาน",
    stuck: "ยังคิดอยู่ — และนั่นก็โอเคแล้ว"
  },
  footer: "— Minna Journey"
}
```

---

## 13. T15 — คืนที่บ้านมินนา

* Protagonist: Ensemble
* Theme: Gratitude + Belongingness / D
* Badge: ดอกไม้แห้ง
* สถานะ: implement แล้ว ✅

**ใช้เป็น Gold Standard Track ด้าน**

* ensemble writing
* belongingness
* gratitude
* summary quality
* share-safe wording

---

## 14. T16 — ใบบัวกับเสียงในใจ

* Protagonist: ใบบัว
* Theme: Self-compassion / C
* Badge: สมุดบันทึก
* สถานะ: implement แล้ว ✅

**ใช้เป็น Gold Standard Track ด้าน**

* disclosure
* rejection
* self-compassion
* layered inner voice
* containment

---

## 15. Psychological Framework

### Inner Voice Device

* T12 ใบบัว: เสียงคุณยาย “อย่าเด่นจะเป็นภัย”
* T13 หยก: เสียงแม่เปรียบกับพี่นุ้ย
* T14 หยก: เสียงแม่ที่ซ่อน conditional love
* T15 ensemble: inner voice ของมินนา หยก ใบบัว
* T16 ใบบัว: เสียงยาย + เสียงน้า + เสียงตัวเอง (3 ชั้น)

**Rule:**
framing เป็น “ประโยคที่จำได้ผุดขึ้นในใจ” ไม่ใช่ auditory hallucination

### Transgenerational Lens

* ผู้ใหญ่ทุกคนมีบาดแผลของตัวเอง — ไม่ใช่ villain
* Pattern ส่งต่อข้ามรุ่นโดยไม่ตั้งใจ
* Family evolution เป็นไปได้ — รุ่นเราเลือกได้
* เด็กไม่ต้องรอให้ผู้ใหญ่ heal ก่อน

### Satir Change Model

Status Quo → Foreign Element → Chaos → Transforming Idea → New Status Quo

### Self-compassion Framework (ใช้ใน T16)

1. Self-kindness
2. Common humanity
3. Mindfulness

---

## 16. Safety Architecture (v2.4 — Locked)

### หลักการ

Design เป็น Safety Layer หลัก ไม่ใช่ Detection System

* Minna Journey เป็น universal prevention ไม่ใช่ clinical intervention
* เด็กที่เลือก stuck ไม่ได้แปลว่า crisis — อาจแปลว่า honest หรือ track นั้น resonate สูง
* ไม่มี trigger system
* ไม่มี distress detection
* ไม่มี track classification ระดับความเสี่ยง
* ไม่จัดระดับ track เพราะ Minna ออกแบบ theme ให้เป็น light & warm ที่สะท้อนปัญหาวัยรุ่นไทย

### Safety Rules

1. ภาษาทุกจุดไม่ตัดสิน ไม่มี shame
2. stuck ≠ ผิด — ไม่มี negative reinforcement
3. Passive exit pathway — มีปุ่ม “คุยกับน้องฮักต่อ” อยู่ใน UI ตลอดเวลา โดยไม่มีเงื่อนไข ไม่ pop ขึ้นเอง
4. ไม่มี open-ended text input ในบริบทของเกม
5. Escalation pathway = chatbot น้องฮัก ที่ห่อหุ้มเกมอยู่แล้ว

### ขอบเขตที่ชัดเจน

* Minna = reflective narrative
* Nong Hug chatbot = conversation space
* Clinical help = outside the game

---

## 17. Product Governance (v2.4)

### AI Team Structure

#### Clinical / Product Director

* คน
* กำหนดวิสัยทัศน์
* ตัดสินใจขั้นสุดท้าย
* คุม clinical safety

#### Strategic & Governance

* GPT
* วางระบบ
* สะท้อนภาพใหญ่
* จัด priority
* ทำ Product Principles

#### Narrative & Theme Writer

* Claude
* draft track
* dialogue
* emotional arc
* character voice

#### Implementation Engineer

* Claude Code
* เขียนโค้ด
* implement feature
* deploy
* จัดการ repo

#### Visual & Asset Generator

* Gemini
* scene image
* badge icon
* share card visual

### AI Governance Rules

1. ถ้า AI 2 ตัวเห็นต่างกัน — คนตัดสิน ไม่ใช่ majority vote
2. GPT optimize clarity + scalability / Claude optimize emotional authenticity
3. Claude Code: “ทำ feature ตาม spec เท่านั้น อย่าเปลี่ยน clinical/content logic เอง”
4. Character Bible คือ law สูงสุดของ content

### 3 Environments

#### Minna Lab

* พื้นที่ทดลอง คิดเร็ว เปลี่ยนเร็ว
* ผู้ใช้: คน + ทีม AI
* ความถี่: ทุกวัน

#### Minna Beta

* ทดสอบกับกลุ่มเล็กที่ควบคุมได้
* ผู้ใช้: ทีมพัฒนา + ครู + เด็กอาสา
* ความถี่: รายสัปดาห์

#### Minna Live in Nong Hug

* ใช้งานจริง ต้องนิ่ง ปลอดภัย ผ่าน review
* ผู้ใช้: เด็กจริงใน Nong Hug chatbot
* ความถี่: รายเดือน

### Priority Stack (v2.4)

* Priority 0 — Safety Architecture ✅ Locked
* Priority 1 — T17 Implementation ✅ Complete
* Priority 2 — T(ใบบัว) Implementation
* Priority 3 — Badge Share Card System Spec locked
* Priority 4 — Content tracks ที่ยังขาด
* Priority 5 — Gold Standard: T15 ใช้เป็น template ระบบ
* Priority 6 — Heart System
* Priority 7 — นิทาน

### Pending Design Decision

* Replay inner layer
* Trilogy unlock logic
* Character crossover hints

### Versioning

* v0.x = ทดลองใน Lab
* v0.8–0.9 = Beta candidate
* v1.0 = Core loop stable
* v1.1 = Heart track
* v1.2 = Share card system
* v1.3 = Replay inner layer track แรก
* v2.0 = นิทาน protagonist / trilogy unlock
* v3.0 = Pilot research version / school implementation

---

## 18. Features Implemented

* ✅ Web Share API (badge popup)
* ✅ Feedback form
* ✅ Replay scene
* ✅ 2-column grid home page
* ✅ Cork board overflow fix
* ✅ T14 implement
* ✅ T15 implement
* ✅ T16 implement
* ✅ Beat T16 B4 (ข้าวอุ่น)
* ✅ T17 implement
* ✅ fix/corkboard-badge-display
* ✅ fix/badge-text-rewrite (T1–T16 good + else)
* ✅ Home page: character sections collapsible + มินนา expand default
* ✅ Cork board: per-character rooms 5 tabs + per-room counter

---

## 19. Planned Features

* 🔲 Badge Share Card — Canvas API generate PNG
* 🔲 T(ใบบัว) implement
* 🔲 Heart reaction per track
* 🔲 Replay unlock: Inner Layer scenes (pending design decision)
* 🔲 นิทานปลดล็อคตาม badge trilogy
* 🔲 Character crossover hints
* 🔲 Cork board expansion (auto-fill grid)

---

## 20. Workflow สร้าง Track ใหม่

### Step 1 — Draft content

ต้องครบก่อนไป Step 2

* Scene + Dialogue + inner_voice แต่ละ beat
* badge_good / badge_else / badge_stuck
* summary_reflection
* shareCard (emoji + lines by B4 state + footer)

### Step 2 — Gen ภาพ Gemini

* Gen B1 ก่อนเสมอ → lock ตัวละคร
* B2–B4 แนบภาพ B1 + ระบุ `use attached image as character reference`

**Style base:**
Pixel art style, warm cozy colors, Thai school/home setting, same style as existing Minna Journey scenes.
Image size: `1600x900px (16:9 ratio)`

### Step 3 — Cover

* ใช้ภาพ B1 (`800x600px`)

### Step 4 — Gen Badge 3 แบบ

* Pixel art sprite style
* Transparent background
* no frame
* no text
* no human faces
* `500x500px`
* stuck = dim/dark
* else = partial
* good = full/glowing+sparkle

### Step 5 — Upload assets ไปที่ ROOT ของ repo

* `story[N]_b1-4.jpg` → root
* `badge_t[N]_stuck/else/good.jpg` → root (T11+)

### Step 6 — Implement Claude Code (2 Part)

* Part 1: เพิ่ม track data ใน `tracks.js`
* Part 2: implement home card + badge popup + summary ใน `index.html`

### Step 7 — Merge เข้า main

---

## 21. ปัญหาที่พบบ่อย

* Track ใหม่ไม่ขึ้น → Claude Code สร้าง branch ใหม่แต่ไม่ merge → สั่ง merge เข้า main
* Badge ไม่แสดง → เช็ค `badgePath()` logic และ path ของไฟล์
* แสงภาพกระโดด → Gen ใหม่พร้อมระบุ lighting + แนบ B1 reference
* ตัวละครไม่ตรง → แนบภาพ B1 ไปพร้อม prompt ใน Gemini
* Claude Code timeout → แยก Part 1 และ Part 2
* GitHub แสดงภาพเก่า → browser cache / รอ GitHub Pages deploy
* `.scene-text` ไม่มี white-space → ใช้ `<br>` แทน `\n`

---

## 22. Pilot Study (Phase 5 — Roadmap)

ตัวชี้วัดที่น่าสนใจ:

* ตัวละครไหนถูกเลือกเล่นมากสุด
* stuck rate per track
* completion per character room
* share/save rate
* replay rate
* stuck pattern distribution
* pre-post emotional vocabulary / self-understanding
* help-seeking intention

---

## 23. Next Session

1. T(ใบบัว) — เช้าที่ใบบัวเห็นยาย
2. Badge Share Card implement
3. Heart reaction per track
4. Product Principles / Safety / Track templates ให้ใช้งานครบชุด

```


```
