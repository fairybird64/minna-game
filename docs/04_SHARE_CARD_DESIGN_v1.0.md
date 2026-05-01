# Minna Journey — Share Card Design Rule v1.0
## Governing Document for Share Card Meaning, UX, and Wording

Document status: Draft for review
Owner: Clinical / Product Director
Applies to: Minna Lab, Minna Beta, Minna Live in Nong Hug
Purpose: ใช้กำหนดกติกากลางของระบบ Share Card เพื่อให้การแชร์ของ Minna Journey ปลอดภัย มีศักดิ์ศรี และสอดคล้องกับเป้าหมายด้าน self-worth / self-understanding ของเกม

---

## 1. Purpose of This Document

Share Card ของ Minna Journey ไม่ใช่ "ภาพผลลัพธ์ของผู้เล่น" และไม่ใช่ "การโชว์สภาพภายในของเด็ก" ต่อสาธารณะ
Share Card ต้องทำหน้าที่เป็น สิ่งที่ผู้เล่นถือกลับไปจาก track หนึ่ง ในรูปแบบที่แชร์ได้อย่างปลอดภัย อ่อนโยน และมีศักดิ์ศรี

หลักของระบบนี้คือ:
สิ่งที่แชร์ควรเป็น "resource ที่ได้จากเรื่อง"
ไม่ใช่ "การสรุปว่าเด็กเป็นอะไร"

---

## 2. Core Share Position

### 2.1 Track-level Share Only
Minna ใช้ระบบแชร์แบบ 1 track = 1 share object

ผู้เล่นควรแชร์ได้จาก:
1. หน้า summary ตอนจบ track
2. popup ของ track badge ในห้องของ protagonist

ผู้เล่นไม่ควรแชร์จาก:
- badge popup ราย scene (B1/B2/B3/B4)
- choice result ราย scene
- state ภายในแบบ raw
- score / label / tag

### 2.2 Public Share Must Preserve Dignity
การ์ดที่แชร์ต้องทำให้ทุก state share ได้อย่างมีศักดิ์ศรีเท่ากัน
ห้ามทำให้ state ใดดูเหมือน "แย่กว่า" หรือ "ด้อยกว่า" ใน public surface

### 2.3 Resource, Not Diagnosis
ข้อความบน share card ต้องไม่ทำหน้าที่:
- วินิจฉัย
- จัดประเภทผู้เล่น
- เปิดเผย wound ของผู้เล่นตรงเกินไป
- สรุปว่าผู้เล่นเป็นคนแบบใด

---

## 3. Share Entry Points

### 3.1 Allowed Entry Points
Share card สร้างได้จาก 2 จุดเท่านั้น:
- Track Summary
- Track Badge Popup ในห้องของ protagonist

### 3.2 Unified Output Rule
ไม่ว่าผู้เล่นจะกด share จาก summary หรือจาก room popup
ต้อง generate การ์ดใบเดียวกัน

### 3.3 Not Allowed Entry Points
ห้ามมีปุ่ม share โดยตรงใน:
- B1–B4 choice popup
- scene-level reflection popup

---

## 4. Visual Design Rule

### 4.1 Use Track Object / Emoji, Not Badge Image
การ์ดที่แชร์ต้องใช้:
- emoji object ประจำ track
- title / subtitle ตามความเหมาะสม
- quote 1 บรรทัด
- neutral footer

ห้ามใช้:
- badge image files โดยตรง
- good / else / stuck label
- icon หรือสีที่สื่อ ranking
- scene-level badge art

### 4.2 Why Badge Image Must Not Be Used
badge image ภายในเกมมี state ที่หม่นหรือ dim ได้เพื่อสื่อ narrative state
แต่ถ้านำภาพนั้นไปใช้บน public share card จะเสี่ยงทำให้:
- ความซื่อสัตย์ของผู้เล่นถูกลงโทษทางภาพ
- stuck ดูเป็นผลลัพธ์ที่ด้อยกว่า
- การ์ดบาง state ดู "แย่" กว่าการ์ดอื่น

### 4.3 Equal Dignity Across States
ทุก state ต้องดู shareable เท่ากัน
- ไม่ทำให้ good ดู premium
- ไม่ทำให้ else ดูกลางเกินไป
- ไม่ทำให้ stuck ดูหม่นหรือพัง

---

## 5. Share Quote Rule

### 5.1 Core Rule
quote บน share card ต้องเป็น resource-oriented line
ไม่ใช่ state label ของเด็ก

### 5.2 Best Clinical Framing
quote ที่ดีที่สุดสำหรับ self-worth คือ:
สิ่งที่ protagonist ทำได้ / เห็นได้ / ถือไว้ได้
ไม่ใช่สิ่งที่ผู้เล่น "เป็น"

### 5.3 Quote Must Be Share-safe
quote ต้อง:
- อ่อนโยนกว่า in-game reflection
- ไม่ diagnostic
- ไม่เปิดเผยตัวตนลึกเกินไป
- ไม่เหมือนผลประเมิน
- ไม่ทำให้คนนอกตีความผู้เล่นเกินจริง

### 5.4 Quote Must Still Be Congruent
แม้ share-safe quote จะนุ่มกว่าในเกม
แต่ต้องยังสอดคล้องกับ B4 state จริงของ track นั้น
ห้ามทำให้ทุก state เหมือนกันจนไร้ความหมาย

---

## 6. State Logic for Share Quotes

### 6.1 Determinant
ใช้ B4 choice เป็น determinant ของ share quote

### 6.2 State Design Intent

#### good
ควรให้ resource เชิง: agency, clarity, grounded choice, self-trust

#### else
ควรให้ resource เชิง: permission, emerging awareness, kindness toward uncertainty

#### stuck
ควรให้ resource เชิง: containment, self-compassion, permission to not be ready, dignity in unfinishedness

### 6.3 Critical Rule for stuck
stuck quote ต้องไม่ฟังเหมือนการรายงานว่า "เด็กยังติดอยู่"
แต่ควรฟังเหมือน resource ที่ประคองเด็กในจุดที่ยังไม่พร้อม

---

## 7. Self-worth / Self-esteem Rule

### 7.1 What Strengthens Self-worth
share quote ควรช่วยให้ผู้เล่นรู้สึกว่า:
- สิ่งที่เขาเห็นหรือทำได้มีความหมาย
- การยังไม่พร้อมไม่ใช่ความล้มเหลว
- การค่อยๆ เห็นก็เป็นการเติบโต
- การอยู่กับความจริงบางอย่างอย่างอ่อนโยนก็นับเป็นบางอย่างแล้ว

### 7.2 What Weakens Self-worth
ห้ามใช้ share quote ที่:
- เหมือนสรุปว่าเด็กยังติดอยู่
- เหมือนรายงานผลจิตใจของเด็ก
- เหมือนบอกว่าเด็ก "เป็นคนแบบนี้"
- ทำให้ stuck ดูด้อยกว่า good

---

## 8. Share-safe Wording Principles

### 8.1 Must Be
honest, gentle, specific, concise, strength-based or dignity-preserving, socially safe

### 8.2 Must Not Be
preachy, diagnostic, exposing, shame-based, moralizing, too therapeutic in public language

### 8.3 Formula
Share quote ที่ดีมักอยู่ในรูปแบบ:
- "สิ่งหนึ่งที่เริ่มเห็น"
- "สิ่งหนึ่งที่เลือกได้"
- "สิ่งหนึ่งที่ยังไม่พร้อม แต่ไม่ผิด"
- "สิ่งหนึ่งที่พอวางลงได้"
- "สิ่งหนึ่งที่อยู่กับมันได้โดยไม่ต้องรีบเปลี่ยน"

---

## 9. Recommended Share Card Structure

### 9.1 Minimum Structure
- Track object / emoji
- Track title หรือ short title
- Share-safe quote
- Neutral footer: — Minna Journey

### 9.2 Not Recommended
- choice path เต็ม
- B1–B4 state history
- badge image set
- internal labels
- analytics data

---

## 10. T18 Example Rule

Track: T18 — เช้าที่ใบบัวเห็นยาย | Object: 🍵

good: "นี่ไม่ใช่การยอมแพ้ — แต่คือการเลือกที่จะหยุดต่อสู้กับสิ่งที่เปลี่ยนไม่ได้"
Status: ผ่าน ใช้ได้

else: "ยังไม่รู้จะเรียกมันว่าอะไร — แต่รู้สึกเบากว่าเมื่อวาน"
Status: ผ่าน ใช้ได้

stuck เดิม: "ยังคิดอยู่ — และนั่นก็โอเคแล้ว"
ปัญหา: ฟังคล้ายรายงาน state ของเด็กมากเกินไป
เวอร์ชันที่แนะนำ: "บางเรื่องต้องรอให้ใจพร้อมก่อน — และนั่นก็นับเป็นบางอย่างแล้ว"
เหตุผล: เปลี่ยนจาก state-report → resource / permission / dignity

---

## 11. Implementation Rule

### 11.1 Code Rule
Claude Code ห้าม generate share wording เอง
ให้ implement ตาม spec เท่านั้น

### 11.2 Data Rule
Share card data ต้องอยู่ใน track data อย่างชัดเจน:
- emoji
- shareCard.lines.good
- shareCard.lines.else
- shareCard.lines.stuck
- footer

### 11.3 UI Rule
ปุ่ม "สร้างการ์ดแชร์" แสดงเฉพาะหลังจบ track
room popup ใช้การ์ด track เดียวกัน ไม่สร้าง variant ใหม่

---

## 12. Review Rule

### 12.1 Human Review Required
share quote ทุก track ต้องผ่านมนุษย์ review ก่อน live

### 12.2 Narrative Review
Claude ช่วย review ได้ในเรื่อง:
- emotional fidelity
- over-preachiness
- whether wording sounds like protagonist arc

### 12.3 Final Decision
Clinical / Product Director เป็นผู้ตัดสินขั้นสุดท้าย

---

## 13. Working Red Lines

ห้าม:
1. ใช้ badge image เป็น public share card
2. ใช้ good / else / stuck label บนการ์ด
3. ใช้ quote ที่สรุปว่าเด็กเป็นอะไร
4. ใช้ quote ที่เผย wound ตรงเกินไป
5. ใช้ stuck quote ที่ทำให้ดูด้อยกว่า state อื่น
6. ให้ Claude Code generate wording เองโดยไม่มี spec
7. เปิด share จาก scene-level popup

---

## 14. Final Position Statement

Share Card ของ Minna Journey ต้องเป็น "resource ที่ผู้เล่นถือกลับไปจากเรื่อง"
ไม่ใช่ "ผลลัพธ์ภายในของผู้เล่นที่ถูกเปิดต่อสาธารณะ"

การ์ดที่ดีต้องทำให้ทุก state share ได้อย่างมีศักดิ์ศรี
ใช้ track object เป็นตัวแทนของเรื่อง
ใช้ quote ที่สะท้อนสิ่งที่ protagonist เห็นหรือทำได้
และช่วยเสริม self-worth โดยไม่ตีตรา ไม่วินิจฉัย และไม่เปิดเผยเกินจำเป็น

---

Version: 1.0
Updated: Share Card Design — initial lock
