# MASTER DOCUMENT — Minna Journey
## ฉบับสมบูรณ์ v2.5 (Revised)

**Updated:** T18 Complete + shareCard T1–T18 Data Layer Complete + Share Card Design Locked + Master Quote Card Set Locked + Room Label System Implemented + Docs 04–06 Locked

---

## 1. Project Info

| | |
|---|---|
| Repo | fairybird64/minna-game |
| Live | https://fairybird64.github.io/minna-game/ |
| Stack | index.html + assets/js/tracks.js + assets/ |
| Actions | https://github.com/fairybird64/minna-game/actions |

---

## 2. โครงสร้างไฟล์

```text
index.html — UI + game logic
assets/js/tracks.js — scene data ทุก track
assets/badges/
  badge_t[1-10]_stuck/else/good.jpg
  badge_t[11+]_stuck/else/good.jpg — ROOT
story[N]_b[1-4].jpg — ROOT ทั้งหมด
assets/corkboard.jpg
assets/mood/mood_1-5.jpg
```

```javascript
function badgePath(id, state) {
  const n = Number(id);
  if (n >= 11) return 'badge_t' + id + '_' + state + '.jpg';
  return 'assets/badges/badge_t' + id + '_' + state + '.jpg';
}
```

---

## 3. Choice System

| Tag   | ความหมาย                             |
| ----- | ------------------------------------ |
| good  | ทางเลือกที่ตรงกับตัวเอง (congruent)  |
| else  | ทางเลือกกลางๆ (เริ่มรับรู้)          |
| stuck | ทางเลือกที่ติดอยู่ (self-protection) |

**หลักสำคัญ:** stuck ≠ ผิด คือ honest survival response ไม่มีภาษาหรือ visual ใดที่ทำให้รู้สึกแย่กับการเลือก stuck

---

## 3.5 UX Mechanics Per Track (Standard)

**A. Choice → Badge Popup**
แต่ละ scene (b1–b4) มี 3 choice: good / else / stuck
เมื่อผู้เล่นเลือก → badge popup แสดง: ชื่อ badge + คำอธิบาย 1–2 ประโยค + ปุ่ม "บันทึก"

**Legacy note:**
ปุ่มแชร์แบบ scene-level badge popup เป็นพฤติกรรมเดิมของระบบ และจะถูกทบทวนอีกครั้งเมื่อ Share Card UI แบบ track-level ถูก implement สมบูรณ์

**B. Summary Page**
แสดง choice ที่เลือกแต่ละ scene (b1–b4) พร้อม tag สี
กล่องข้อความสะท้อนการเรียนรู้ของ protagonist
ปุ่ม "สร้างการ์ดแชร์" = entry point หลักของ Share Card UI (pending implement)

**C. Inner Voice Rendering**
ใช้ `voiceLabel` ใน `tracks.js` แยก `.inner-voice` กับ `.dialogue-voice`
inner voice = "ประโยคที่ผุดขึ้นในใจ" ไม่ใช่ auditory hallucination

**D. Badge Format มาตรฐาน**

* `badge_good`: "[ชื่อ badge]" / "[คำอธิบาย 1-2 ประโยค]"
* `badge_else`: "[ชื่อ badge]" / "[คำอธิบาย 1-2 ประโยค]"
* `badge_stuck`: "[ชื่อ badge]" / "[คำอธิบาย 1-2 ประโยค]"
* `summary_reflection`: "[2-3 ประโยค สะท้อน arc ของ protagonist]"

---

## 4. Branch / Deploy

งานทั้งหมด merge เข้า `main` ก่อน GitHub Pages จึง deploy
Claude Code มักสร้าง branch ใหม่ — ต้องสั่ง merge เข้า `main` เสมอ
เช็ค deploy: [https://github.com/fairybird64/minna-game/actions](https://github.com/fairybird64/minna-game/actions)

---

## 5. Cork Board System

* Track 1–10: grid 4×3 (12 slots)
* Track 11–20: grid 5×4 (20 slots) — ขยาย height อัตโนมัติ
* ใช้ `grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))` เพื่อ responsive
* Badge slot ที่ยังไม่ unlock แสดงเป็น `?` placeholder (dim)
* Per-character rooms 5 tabs พร้อม per-room counter
* Badge image size: 90×90px ทุก slot
* T3 `hidden: true` — badge slot ยังอยู่บน cork board เป็น faded `?`

---

## 6. Character Bible v1.0

### 6.1 ตัวละครเด็กหลัก

| ตัวละคร | Pooh Mapping | อายุ/ลักษณะ                                        | Family           | Attachment                           | Core Pattern                    | Inner Voice                  |
| ------- | ------------ | -------------------------------------------------- | ---------------- | ------------------------------------ | ------------------------------- | ---------------------------- |
| มินนา   | Pooh         | หญิง 14-15 ผมยาวสีน้ำตาล                           | อบอุ่น           | Secure                               | รู้สึกมีคุณค่าโดยไม่ต้องพิสูจน์ | "เธอเป็นตัวเองก็พอแล้ว"      |
| โมเน่   | Piglet       | ชาย 13 ผมสั้นดำ (น้องมินนา, ชายรักชาย)             | อบอุ่น           | Secure                               | กล้าเป็นตัวเอง                  | "ฉันรับได้ถึงแม้คนอื่นจะไม่" |
| หยก     | Rabbit       | หญิง 14-15 tomboy undercut สีน้ำเงิน หมอเป๊ะรวย    | ห่างเหิน         | Anxious-conditional                  | Perfectionism + people-pleasing | "พี่นุ้ยทำได้แล้วหยกล่ะ?"    |
| ใบบัว   | Eeyore       | หญิง 14-15 ผมสั้น bob สีดำ ไม่สมบูรณ์ โตกับยาย+น้า | Anxious-avoidant | ลดความคาดหวังตัวเอง suppress emotion | "อย่าเด่นจะเป็นภัย"             |                              |

### 6.2 ครอบครัวมินนา-โมเน่

| ตัวละคร | Pooh  | ลักษณะ                  | Role                 | Pattern                            |
| ------- | ----- | ----------------------- | -------------------- | ---------------------------------- |
| แม่นุ่น | Kanga | หญิง 30 ปลายๆ ผมสั้น    | Secure base หลัก     | Secure / heal แล้ว ฟังจริงๆ        |
| พ่อนัท  | Owl   | ชาย 30 ปลายๆ เสื้อเชิ้ต | Secure base สนับสนุน | Secure / รู้เยอะ บางทีอธิบายแทนฟัง |

### 6.3 ครอบครัวหยก — Family Rules (Implicit)

* "ความรู้สึกไม่ใช่ข้อมูล — ผลลัพธ์ต่างหากที่บอกว่าโอเค" → suppress emotion
* "รักคือการเป็นห่วง และการเป็นห่วงคือการชี้ว่าอะไรยังไม่พอ" → conditional love
* "คนในบ้านนี้ไม่บ่น ไม่ขอ แก้ปัญหาเอง" → people-pleasing

### 6.4 ครอบครัวใบบัว — Family Rules (Implicit)

* จากยาย: "อย่าเด่น จะเป็นภัย" / "ทำแบบนั้นไม่ได้" / "ความรู้สึกพูดไม่ได้"
* จากน้า: "อย่าทำให้บ้านวุ่นวาย" / "แก้ปัญหาเงียบๆ เอง"
* Rule ที่ใบบัวสร้างเอง: "การอยู่รอดคือการไม่เด่น ไม่เดือดร้อน ไม่ต้องการ"

**Core wound:**
ทุกคนในบ้านนี้ผ่านความเจ็บปวดเดียวกัน แต่เลือก cope ต่างกัน — ยายเลือก control, น้าเลือก prove, พ่อแม่เลือก leave

### 6.5 ตัวละครพิเศษ

| ตัวละคร | Pooh Mapping      | บทบาท                                                   |
| ------- | ----------------- | ------------------------------------------------------- |
| ครูต้น  | Christopher Robin | คนที่ "เห็น" เด็กในแบบที่เขาเป็น / ผู้ใหญ่ที่ heal แล้ว |
| มะม่วง  | Tigger (สัตว์)    | แมวส้มตัวอ้วนของมินนา                                   |
| มะพร้าว | —                 | หมาขาวขนฟูของโมเน่                                      |

---

## 7. Theme Map — 5 Clusters

**Cluster A — รู้จักตัวเอง (Self-awareness)**

* อารมณ์มีชื่อ / Emotional literacy
* ความคิดฟุ้ง / Thought defusion
* เสียงในใจ vs เสียงจริง / Inner critic awareness

**Cluster B — ครอบครัวสร้างเรา**

* รูปแบบการฟังในบ้าน / Listening patterns
* บาดแผลข้ามรุ่น / Transgenerational wound
* ผู้ใหญ่ก็มีบาดแผล / Humanizing parents

**Cluster C — คุณค่าของตัวเอง**

**Cluster D — ความสัมพันธ์**

**Cluster E — การเติบโต**

---

## 8. Track Status

| Track      | ชื่อ                      | Protagonist | Theme / Cluster                   | Badge           | Status    |
| ---------- | ------------------------- | ----------- | --------------------------------- | --------------- | --------- |
| T1         | มินนากับมะม่วง            | มินนา       | ความคาดหวัง / A                   | ตุ๊กตาแมว 🐱    | ✅         |
| T2         | มิตรภาพใหม่               | มินนา       | ความกลัวการเริ่มต้น / D           | หูฟัง 🎧        | ✅         |
| T3         | วันที่ดีแบบเรียบง่าย      | มินนา       | เห็นตัวเอง / C                    | แก้วโกโก้ ☕     | 🙈 hidden |
| T4         | วันที่เพื่อนล้อ           | โมเน่       | ความรู้สึกซ่อนเร้น / A            | หมอนอิง 🛋️     | ✅         |
| T5         | ความสัมพันธ์ในครอบครัว    | ครอบครัว    | บ้านปลอดภัยไหม / B                | โคมไฟ 🏮        | ✅         |
| T6         | โมเน่กับวันเสาร์ที่บ้าน   | โมเน่       | ความไม่แฟร์ / A                   | มะพร้าว 🥥      | ✅         |
| T7         | หมอน้อย                   | หยก         | ก้าวแรก / C                       | กระถางต้นไม้ 🪴 | ✅         |
| T8         | มินนากับวันหลังจากนั้น    | มินนา       | Shame / A                         | ผ้าห่ม 🧣       | ✅         |
| T9         | ใบบัวกับไพ่ที่วางไม่ลง    | ใบบัว       | Anxiety / A                       | ไพ่ 🃏          | ✅         |
| T10        | ห้องของมินนา              | มินนา       | Reflection / A                    | กรอบรูป 🖼️     | ✅         |
| T11        | วันที่โมเน่นั่งเงียบ      | โมเน่       | LGBTQ+ self-acceptance / C        | ผีเสื้อ 🦋      | ✅         |
| T12        | ใบบัวกับฟีดที่ไม่มีวันหมด | ใบบัว       | FOMO + Imposter / A,C             | เมล็ดพันธุ์ 🌱  | ✅         |
| T13        | วันที่หยกต้องสมบูรณ์แบบ   | หยก         | Perfectionism / C                 | ดอกลิลลี่ 🌷    | ✅         |
| T14        | วันที่หยกรับคำชมไม่ได้    | หยก         | People-pleasing / C               | ดอกทานตะวัน 🌻  | ✅         |
| T15        | คืนที่บ้านมินนา           | Ensemble    | Gratitude / D                     | ดอกไม้แห้ง 🌾   | ✅         |
| T16        | ใบบัวกับเสียงในใจ         | ใบบัว       | Self-compassion / C               | สมุดบันทึก 📓   | ✅         |
| T17        | วันที่โมเน่รู้แล้ว        | โมเน่       | Academic pressure / E             | รองเท้าผ้าใบ 👟 | ✅         |
| T18        | เช้าที่ใบบัวเห็นยาย       | ใบบัว       | Ambiguous loss + หยุดดิ้นรน / B,E | ถ้วยชา 🍵       | ✅         |
| T(มินนา)   | —                         | มินนา       | Online self vs real self / A      | —               | 🔲        |
| T(โมเน่-2) | —                         | โมเน่       | —                                 | —               | 🔲        |
| T(หยก-1)   | —                         | หยก         | —                                 | —               | 🔲        |
| T(หยก-2)   | —                         | หยก         | —                                 | —               | 🔲        |
| T(ใบบัว-2) | —                         | ใบบัว       | —                                 | —               | 🔲        |
| T20        | ครูต้น                    | Ensemble    | Final resolution / E              | —               | 🔲        |

---

## 9. Badge Share Card System (v2.5 — Data Layer Complete)

### หลักการ

* Share card = 1 ใบ / 1 track completion เท่านั้น
* Determinant = B4 choice (จุดยืนสุดท้ายของ track)
* Visual = emoji object คงที่ประจำ track + quote text ตาม B4 state
* ไม่แสดง label good / else / stuck บนการ์ด
* ไม่ใช้ badge image files ในการ์ด (badge image อยู่ในเกมเท่านั้น)
* Render PNG ผ่าน Canvas API (pending UI implementation)

### เหตุผล

* ไม่ลงโทษความซื่อสัตย์ (ไม่ใช้ stuck count)
* badge stuck ถูกออกแบบให้ dim — ถ้าเอาขึ้น social จะส่ง signal ผิด
* ทุก state share ได้อย่างมีศักดิ์ศรี
* internal data ยังเก็บครบ B1–B4 สำหรับวิจัยและ analytics

### Data Architecture

**Internal track record (analytics/research):**

* `b1_choice`
* `b2_choice`
* `b3_choice`
* `b4_choice`
* `full_path`

**Public share output:**

* `track_id`
* `track_emoji`
* `b4-derived quote`
* `neutral footer`

**Data fields ใน `tracks.js`:**

```javascript
shareCard: {
  emoji: "🍵",
  lines: {
    good: "...",
    else: "...",
    stuck: "..."
  },
  footer: "— Minna Journey"
}
```

### สถานะ

* ✅ **Data layer complete** — shareCard T1–T18 ครบใน `tracks.js`
* ✅ **Docs locked** — docs/04, 05, 06
* 🔲 **UI layer pending** — Canvas API, ปุ่ม summary + room popup

### Share Entry Points (Target Spec)

* ปุ่ม "สร้างการ์ดแชร์" ใน summary page หลังจบ track
* Badge popup ใน room ของ protagonist
* ทั้ง 2 จุด generate การ์ดใบเดียวกัน

**Legacy note:**
Web Share API จาก scene-level badge popup ยังมีอยู่ในระบบเดิม
แต่ target architecture ของ Share Card คือ **track-level only** ผ่าน summary page และ room popup

---

## 10. Badge Text — ทุก Track (v2.5)

*(ดูไฟล์ `tracks.js` สำหรับ badge text ที่ implement แล้ว)*
*(ดู `docs/06_MASTER_QUOTE_CARD_SET_T1-T18_v1.0.md` สำหรับ share card quotes)*

**หมายเหตุ:** stuck states LOCKED ทั้งหมด

---

## 11. T18 — "เช้าที่ใบบัวเห็นยาย" ✅ IMPLEMENTED

**Protagonist:** ใบบัว
**Theme:** Ambiguous loss + หยุดดิ้นรน / B, E
**Badge:** ถ้วยชา 🍵

**Content sensitivity note:** ambiguous loss / family wound
**Bridge copy (ใน summary):**
"ถ้าเรื่องนี้ทำให้นึกถึงอะไรในใจ ลองกลับไปคุยกับน้องฮักต่อได้นะ"

**Scene B1 — เช้าตรู่คนเดียว**
ใบบัวลืมตาขึ้นมาโดยไม่รู้สาเหตุ ห้องยังมืดอยู่ ไม่มีเสียงอะไร
`inner_voice:` "ฉันอยู่คนเดียว... แต่ไม่รู้สึกว่าต้องระวังตัว"

**Scene B2 — จดหมายในลิ้นชัก**
ใบบัวเดินไปหาของอย่างอื่น แต่มือไปสะดุดกล่องกระดาษเก่า
`inner_voice:` "ยายก็กลัว — เหมือนฉัน"

**Scene B3 — ในครัว**
ยายนั่งนิ่ง หลังตรง ถือถ้วยชา มองออกไปนอกหน้าต่าง
`inner_voice:` "เราเหมือนกันตรงนี้ด้วยหรือเปล่า?"

**Scene B4 — หน้าบ้าน**
`inner_voice:` "ฉันเคยอยากให้มันต่างออกไป แต่วันนี้ฉันแค่ยืนอยู่ตรงนี้ และมันก็… พอแล้ว"

**shareCard:** 🍵

* good: "นี่ไม่ใช่การยอมแพ้ — แต่คือการเลือกหยุดต่อสู้กับสิ่งที่เปลี่ยนไม่ได้ เพื่อกลับมาดูแลใจตัวเอง"
* else: "บางความจริงอาจยังยอมรับยาก — แต่การเริ่มมองเห็นโดยไม่หลบตา ก็นับเป็นจุดเริ่มต้นที่มีความหมายแล้ว"
* stuck: "ไม่ต้องรีบเข้าใจทุกอย่างในวันนี้ — การอนุญาตให้ตัวเองยังไม่พร้อม คือความใจดีอย่างหนึ่ง"

---

## 12. T17 — "วันที่โมเน่รู้แล้ว" ✅ IMPLEMENTED

**Protagonist:** โมเน่
**Theme:** Academic pressure / E
**Badge:** รองเท้าผ้าใบ 👟

**Scene B1 — ห้องนอน คืนก่อนสอบ**
โมเน่นั่งที่โต๊ะ หนังสือกองอยู่ข้างหน้า มะพร้าวนอนอยู่ใต้เก้าอี้
`inner_voice:` "ถ้าเริ่มอ่านตั้งแต่อาทิตย์ที่แล้ว ตอนนี้คงไม่ต้องรู้สึกแบบนี้ แต่ตอนนี้ก็ยังไม่ใช่เที่ยงคืน"

**Scene B2 — ห้องสอบ**
`inner_voice:` "รู้แล้ว ข้อนี้ไม่รู้ เพราะข้ามไป ไม่มีประโยชน์ที่จะนั่งกับมันตอนนี้"

**Scene B3 — หน้าโรงเรียน รอแม่มารับ**
แม่นุ่นขับรถเข้ามาจอด เปิดกระจกถามว่า "เป็นไงบ้างลูก?"
`inner_voice:` "ฉันทำไม่ดีพอ แต่ฉันก็ทำเท่าที่ทำได้แล้ว สองอย่างนี้มันเป็นจริงพร้อมกันได้"

**Scene B4 — โต๊ะกินข้าว คืนนั้น**
พ่อนัทพูดเรื่องการทำตาราง วางแผนล่วงหน้า
`inner_voice:` "พ่อไม่ได้ผิด แต่ฉันรู้แล้วว่าจะทำอะไร และมันไม่ใช่ตาราง"

**shareCard:** 👟

* good: "ฟังเสียงคนอื่นได้ — แต่สุดท้ายเรามีสิทธิ์ที่จะเลือกเส้นทางที่เป็นของตัวเองจริงๆ"
* else: "ข้างในเริ่มชัดขึ้นแล้ว — แค่รอวันที่หัวใจพร้อมพูดออกมา"
* stuck: "บางครั้งเราต้องใช้เวลา — เพื่อแยกเสียงความคาดหวังของคนอื่นออกจากเสียงของตัวเราเอง"

---

## 13. Psychological Framework

### Inner Voice Device

* T12 ใบบัว: เสียงคุณยาย "อย่าเด่นจะเป็นภัย"
* T13 หยก: เสียงแม่เปรียบกับพี่นุ้ย
* T14 หยก: เสียงแม่ที่ซ่อน conditional love
* T15 ensemble: inner voice ของมินนา หยก ใบบัว
* T16 ใบบัว: เสียงยาย + เสียงน้า + เสียงตัวเอง (3 ชั้น)

**ต้องระวัง:** framing เป็น "ประโยคที่จำได้ผุดขึ้นในใจ" ไม่ใช่ auditory hallucination

### Transgenerational Lens

* ผู้ใหญ่ทุกคนมีบาดแผลของตัวเอง — ไม่ใช่ villain
* Pattern ส่งต่อข้ามรุ่นโดยไม่ตั้งใจ
* Family evolution เป็นไปได้ — รุ่นเราเลือกได้
* เด็กไม่ต้องรอให้ผู้ใหญ่ heal ก่อน

### Satir Change Model

Status Quo → Foreign Element → Chaos → Transforming Idea → New Status Quo

### Self-compassion Framework (Kristin Neff)

1. Self-kindness
2. Common humanity
3. Mindfulness

### Satir Beliefs ที่ใช้ใน Badge Writing

1. การเปลี่ยนแปลงเป็นไปได้เสมอ
2. ทุกคนมีทรัพยากรภายในที่พอสำหรับการเติบโต
3. ปัญหาไม่ใช่ปัญหา วิธีที่รับมือต่างหากที่เป็นปัญหา
4. ความรู้สึกเป็นของเรา เราเลือกได้ว่าจะทำอะไรกับมัน
5. เราเปลี่ยนอดีตไม่ได้แต่เปลี่ยนผลที่อดีตมีต่อเราได้
6. คนมีพื้นฐานที่ดี
7. ความหวังคือส่วนประกอบสำคัญของการเปลี่ยนแปลง
8. coping สะท้อน self-worth

---

## 14. นิทาน — โครงสร้าง

**นิทาน ep.1 — "วันที่หยกได้ยินเรื่องราวของแม่"**
**Current working unlock:** T7 + T13 + T14
Theme: Transgenerational wound / B+C
Core message: แม่หยกเคยเป็นเด็กที่ถูก compare เหมือนกัน — เธอรักหยก แต่ไม่รู้ว่ารักแบบนั้นเจ็บ

**นิทาน ep.2 — "ยายกับสิ่งที่ไม่เคยพูด"**
**Current working unlock:** T9 + T16 + T18
Theme: Family secret / Wounded Kanga / B
Core message: ยายดุเพราะกลัว ไม่ใช่เพราะไม่รัก และยายก็ไม่เคยได้รับอนุญาตให้รู้สึกเหมือนกัน

**Note:**
Story unlock architecture ยังเป็น pending design decision ระหว่าง

* badge trilogy / current working unlock
* 5 tracks ต่อ protagonist ก่อน unlock story

---

## 15. Safety Architecture (v1.1 — Locked)

ดูไฟล์: `docs/01_SAFETY_BY_DESIGN_v1.1.md`

**หลักการหลัก:** Design เป็น Safety Layer ไม่ใช่ Detection System

### Safety Rules

1. ภาษาทุกจุดไม่ตัดสิน ไม่มี shame
2. stuck ≠ ผิด — ไม่มี negative reinforcement ใดๆ
3. Passive exit pathway — ปุ่ม "คุยกับน้องฮักต่อ" อยู่ใน UI ตลอดเวลา
4. ไม่มี open-ended text input ในบริบทของเกม
5. Escalation pathway = chatbot น้องฮัก

### ขอบเขตที่ชัดเจน

* Minna = reflective narrative
* Nong Hug chatbot = conversation space
* Clinical help = outside the game

### Content Scope & Framing Rules

* Minna เล่าเรื่อง NSSI, substance use, bully, depression, anxiety-panic ได้ในกรอบ psychoeducation
* ห้ามบรรยาย method / instructional detail
* ห้าม glamorize
* ต้องจบด้วย containment หรือ bridge to resource

### Resource Footer (Home Page)

* 🤍 น้องฮักพร้อมฟังอยู่เสมอ
* 📞 สายด่วนสุขภาพจิต 1323
* 🏥 แอดไลน์ `@MorPrompt` แล้วค้นหา "จิตเวช"
* Phase 2: เพิ่ม local resource เชียงราย / พะเยา

---

## 16. Room / Navigation System (v2.5)

### Protagonist-specific room labels (implemented)

* มินนา → ห้องมินนา (tracks: 1, 2, 3, 8, 10, 15)
* โมเน่ → ห้องโมเน่ (tracks: 4, 6, 11, 17)
* หยก → ห้องหยก (tracks: 7, 13, 14)
* ใบบัว → ห้องใบบัว (tracks: 9, 12, 16, 18)
* Ensemble / undefined → fallback "ห้องของฉัน"

**Implementation:** `getRoomLabel(trackId)` helper function ใน `index.html`

---

## 17. Product Governance (v2.5)

### AI Team Structure

| บทบาท                     | ผู้รับผิดชอบ | หน้าที่หลัก                                             |
| ------------------------- | ------------ | ------------------------------------------------------- |
| Clinical/Product Director | คุณ          | กำหนดวิสัยทัศน์ ตัดสินใจขั้นสุดท้าย คุม clinical safety |
| Strategic & Governance    | GPT          | วางระบบ สะท้อนภาพใหญ่ จัด priority                      |
| Narrative & Theme Writer  | Claude       | draft track, dialogue, emotional arc, character voice   |
| Implementation Engineer   | Claude Code  | เขียนโค้ด implement feature, deploy, จัดการ repo        |
| Visual & Asset Generator  | Gemini       | scene image, badge icon, share card visual              |

### AI Governance Rules

1. ถ้า AI 2 ตัวเห็นต่างกัน — คุณตัดสิน ไม่ใช่ majority vote
2. GPT optimize clarity + scalability / Claude optimize emotional authenticity
3. Claude Code: "ทำ feature ตาม spec เท่านั้น อย่าเปลี่ยน clinical/content logic เอง"
4. Character Bible คือ law สูงสุดของ content — AI ทุกตัวต้องยึดถือ

### 3 Environments

| Environment            | นิยาม                            | ผู้ใช้                      | ความถี่เปลี่ยน |
| ---------------------- | -------------------------------- | --------------------------- | -------------- |
| Minna Lab              | พื้นที่ทดลอง คิดเร็ว เปลี่ยนเร็ว | คุณ + ทีม AI                | ทุกวัน         |
| Minna Beta             | ทดสอบกับกลุ่มเล็กที่ควบคุมได้    | ทีมพัฒนา + ครู + เด็กอาสา   | รายสัปดาห์     |
| Minna Live in Nong Hug | ใช้งานจริง ต้องนิ่ง ปลอดภัย      | เด็กจริงใน Nong Hug chatbot | รายเดือน       |

---

## 18. Priority Stack (v2.5)

**Priority 0 — Safety Architecture** ✅ Locked (`docs/01_SAFETY_BY_DESIGN_v1.1.md`)

**Priority 1 — T17 + T18 Implementation** ✅ Complete (merged main)

**Priority 2 — Share Card System**

* ✅ Spec locked (`docs/04_SHARE_CARD_DESIGN_v1.0.md`)
* ✅ Pilot quotes locked (`docs/05_PILOT_QUOTE_CARDS_v1.0.md`)
* ✅ Master quote set locked (`docs/06_MASTER_QUOTE_CARD_SET_T1-T18_v1.0.md`)
* ✅ Data layer complete — shareCard T1–T18 ใน `tracks.js`
* 🔲 **UI layer pending** — Canvas API + ปุ่ม summary / room

**Priority 3 — Home Page**

* 🔲 Onboarding brief
* 🔲 Resource footer (1323 + หมอพร้อม)

**Priority 4 — Content: tracks ที่ยังขาด**

* T(มินนา) — Online self vs real self
* T(หยก-1), T(หยก-2)
* T(ใบบัว-2)
* T(โมเน่-2)
* T20 — ครูต้น Final resolution

**Priority 5 — Gold Standard Reference**

* T15 ใช้เป็น template ระบบ

**Priority 6 — Heart System**

* Personal resonance signal

**Priority 7 — นิทาน**

* ep.1: หยกกับเรื่องราวของแม่
* ep.2: ยายกับสิ่งที่ไม่เคยพูด
* current working unlock ใช้ trilogy logic ชั่วคราว
* final unlock architecture ยัง pending decision

**Pending Design Decision**

* Replay inner layer — ต้องการ Narrative + Technical + UX spec ก่อน
* Story unlock architecture (5 tracks / protagonist model vs trilogy)
* Character crossover hints

---

## 19. Doc Structure (v2.5)

```text
CLAUDE.md — กติกาหน้า repo (updated v2.5)
docs/
  00_PRODUCT_PRINCIPLES_v1.0.md
  01_SAFETY_BY_DESIGN_v1.1.md ✅ LOCKED
  02_MASTER_DOCUMENT_v2.5.md ← THIS FILE
  03_DOCUMENT_HIERARCHY_OPERATING_RULES_v1.0.md
  04_SHARE_CARD_DESIGN_v1.0.md ✅ LOCKED
  05_PILOT_QUOTE_CARDS_v1.0.md ✅ LOCKED
  06_MASTER_QUOTE_CARD_SET_T1-T18_v1.0.md ✅ LOCKED
  07_REPLAY_ARCHITECTURE_v1.0.md (pending)
  WORKFLOW.md
  templates/
    TRACK_SPEC_TEMPLATE.md
    PRE_MERGE_CHECKLIST.md (pending)
    PLAYTESTER_CHECKLIST.md (pending)
```

---

## 20. Features ที่ Implement แล้ว

✅ Web Share API (legacy badge popup behavior)
✅ Feedback form
✅ Replay scene
✅ 2-column grid home page
✅ Cork board overflow fix
✅ T1–T18 implement ครบ (scene content + badge + summary + shareCard)
✅ T17 scene content (dialogue แม่นุ่น + พ่อนัท)
✅ T18 scene content + bridge copy
✅ `getRoomLabel()` helper — room label ตาม protagonist
✅ shareCard data T1–T18 ใน `tracks.js`
✅ Badge text good+else T1–T17 updated
✅ Cork board: per-character rooms 5 tabs + per-room counter
✅ Home page: character sections collapsible

---

## 21. Planned Features

🔲 **Share Card UI** — Canvas API generate PNG (Priority 2)
🔲 **Home Page Onboarding + Resource Footer** (Priority 3)
🔲 T(มินนา), T(หยก-1), T(หยก-2), T(ใบบัว-2), T(โมเน่-2), T20 (Priority 4)
🔲 Heart reaction per track (Priority 6)
🔲 Replay unlock: Inner Layer scenes (pending design decision)
🔲 `PRE_MERGE_CHECKLIST.md` + `PLAYTESTER_CHECKLIST.md` ใน templates/
🔲 `07_REPLAY_ARCHITECTURE_v1.0.md`
🔲 Story unlock architecture finalization (trilogy vs 5 tracks / protagonist)
🔲 Character crossover hints

---

## 22. Workflow สร้าง Track ใหม่

**Step 1 — Draft content** (ต้องครบก่อนไป Step 2)

* Scene + Dialogue + `inner_voice` แต่ละ beat
* `badge_good` / `badge_else` / `badge_stuck`
* `summary_reflection`
* `shareCard` (emoji + lines by B4 state + footer)
* content sensitivity note
* gentle notice / bridge copy ถ้าจำเป็น

**Step 2 — Clinical Review**
คุณ sign off ก่อนเสมอ

**Step 3 — Gen ภาพ Gemini**

* Gen B1 ก่อนเสมอ → lock ตัวละคร
* B2–B4 แนบภาพ B1 + ระบุ `"use attached image as character reference"`
* Style: Pixel art style, warm cozy colors, Thai school/home setting
* Image size: 1600x900px (16:9 ratio)

**Step 4 — Cover**
ใช้ภาพ B1

**Step 5 — Gen Badge 3 แบบ**

* Style: Pixel art sprite style, like Stardew Valley item icon
* Transparent background, no frame, no text, no human faces
* Image size: 500x500px
* stuck = dim/dark, else = partial, good = full/glowing+sparkle

**Step 6 — Upload assets ไปที่ ROOT ของ repo**

**Step 7 — Implement Claude Code (2 Part)**

* Part 1: เพิ่ม track data ใน `tracks.js`
* Part 2: implement home card + badge popup + summary ใน `index.html`

**Step 8 — Merge เข้า main**

---

## 23. ปัญหาที่พบบ่อย

| ปัญหา                          | วิธีแก้                                                          |
| ------------------------------ | ---------------------------------------------------------------- |
| Track ใหม่ไม่ขึ้น              | Claude Code สร้าง branch ใหม่แต่ไม่ merge → สั่ง merge เข้า main |
| Badge ไม่แสดง                  | เช็ค `badgePath()` logic และ path ของไฟล์                        |
| แสงภาพกระโดด                   | Gen ใหม่พร้อมระบุ lighting + แนบ B1 reference                    |
| ตัวละครไม่ตรง                  | แนบภาพ B1 ไปพร้อม prompt ใน Gemini                               |
| Claude Code timeout            | แยก Part 1 (`tracks.js`) และ Part 2 (`index.html`)               |
| GitHub แสดงภาพเก่า             | Browser cache → Ctrl+Shift+R / รอ GitHub Pages deploy            |
| `.scene-text` ไม่มี whitespace | ใช้ `<br>` แทน `\n`                                              |
| Room label ไม่ตรง protagonist  | ใช้ `getRoomLabel(trackId)` helper ใน `index.html`               |

---

## 24. Pilot Study (Phase 5 — Roadmap)

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

## 25. Versioning

| Version  | ความหมาย                                                       |
| -------- | -------------------------------------------------------------- |
| v0.x     | ทดลองใน Lab                                                    |
| v0.8–0.9 | Beta candidate                                                 |
| v1.0     | Core loop stable: เล่น → choice → badge → cork board → summary |
| v1.1     | Share card data layer + quote system locked                    |
| v1.2     | Share card UI complete                                         |
| v1.3     | Replay architecture locked + deep replay track แรก             |
| v2.0     | Story unlock system stable                                     |
| v3.0     | Pilot research version / school implementation                 |

---

**Document version:** 2.5
**Updated:** T18 Complete + shareCard T1–T18 Data Layer Complete + Share Card Docs Locked (04/05/06) + Room Label System + Docs Infrastructure Complete
**Next:** Share Card UI Implementation (Canvas API) + Home Page Onboarding / Resource Footer
