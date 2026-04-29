# Minna Journey — Product Principles v1.0

## Purpose
เอกสารนี้เป็นกรอบ product ระดับสูงสุดของ Minna Journey ใช้กำหนดว่า Minna คืออะไร ไม่ใช่อะไร และใช้ตัดสินทิศทางเมื่อมีข้อเสนอใหม่หรือ AI ให้คำตอบต่างกัน

---

## 1. Product Identity

### Minna Journey คืออะไร
Minna Journey คือเกมเล่าเรื่องเชิงสะท้อนใจสำหรับวัยรุ่น ที่ช่วยให้ผู้เล่นเข้าใจความรู้สึก ความคิด ความสัมพันธ์ และคุณค่าของตนเอง ผ่านเรื่องราวของตัวละครหลัก การเลือกทางเดินของใจ การสะท้อนความหมายของสิ่งที่เลือก และการเก็บ badge เป็นความทรงจำทางใจในห้องของตัวละครแต่ละคน

### Minna Journey อยู่ตรงไหนในระบบน้องฮัก
- Minna = reflective narrative / universal prevention
- Nong Hug chatbot = conversation space / support bridge
- Clinical care = ระบบบริการจริงนอกเกม

### Minna Journey ไม่ใช่อะไร
- ไม่ใช่เกมที่ให้ผู้เล่นตอบให้ถูก
- ไม่ใช่เครื่องมือวินิจฉัยโรค
- ไม่ใช่ระบบ risk detection ภายในเกม
- ไม่ใช่พื้นที่บำบัดแบบเปิดปลาย
- ไม่ใช่ social ranking game

---

## 2. Product Promise

Minna สัญญากับผู้เล่นว่า

1. ผู้เล่นจะไม่ถูกตัดสินจากสิ่งที่เลือก
2. เกมจะช่วยให้ผู้เล่น “เห็นตัวเองมากขึ้น” ไม่ใช่ “เก่งขึ้นตามเกณฑ์ของระบบ”
3. badge คือของที่เก็บไว้ในใจ ไม่ใช่รางวัลเชิงแข่งขัน
4. การเล่นซ้ำคือการมองเห็นเรื่องเดิมลึกขึ้น ไม่ใช่การแก้คำตอบเดิม
5. ถ้าเรื่องใดแตะใจหนักเกินไป ผู้เล่นจะมีทางพัก ทางถอย และทางเชื่อมต่อไปยังน้องฮักได้เสมอ

---

## 3. Core Philosophy

### Satir-based foundation
- คนส่วนใหญ่ทำดีที่สุดเท่าที่ทำได้ ณ เวลานั้น
- coping เป็นแนวทางเอาตัวรอดจากประสบการณ์เจ็บปวด
- ทุกคนมีทรัพยากรภายในพอสำหรับการเติบโต
- ปัญหาไม่ใช่ปัญหา แต่วิธีรับมือต่างหากที่เป็นปัญหา
- การเปลี่ยนแปลงภายในเป็นไปได้เสมอ

### Choice philosophy
- ทุก track ควรมีอย่างน้อย 3 ทางเลือก
- หลีกเลี่ยง binary trap แบบ “ถูก/ผิด”
- choice ทั้งหมดคือ continuum ของการรับมือ
- internal tags เช่น good / else / stuck เป็น logic ภายในเท่านั้น

### Tone philosophy
- warm
- light but not shallow
- honest but gentle
- specific
- not preachy
- no shame

---

## 4. Product Engines

ทุก feature ใหม่ต้องอยู่ใน engine ใด engine หนึ่งต่อไปนี้

1. **Narrative Engine** — track, B1–B4, protagonist, arc
2. **Reflection Engine** — popup, summary, share-safe quote
3. **Memory Engine** — badge, protagonist room, cork board
4. **Replay Engine** — replay scene, choice shuffle, future replay depth
5. **Universe Engine** — character bible, นิทาน, trilogy unlock, crossover hints
6. **Safety Engine** — passive exit, wording, framing, sensitivity review
7. **Integration Engine** — bridge กลับน้องฮัก, home, protagonist room, support path

ถ้า feature ใหม่ไม่อยู่ใน engine ใดเลย ให้พักไว้ใน backlog ก่อน

---

## 5. Target Users

### Primary
- เด็กและวัยรุ่นประมาณ 11–19 ปี
- ผู้ใช้ทั่วไปที่อาจยังไม่พร้อมเข้าสู่การคุยเชิงลึกหรือการประเมินตรง ๆ

### Secondary
- ครูและบุคลากรที่ต้องการเครื่องมือ universal prevention
- ทีมพัฒนา Nong Hug ที่ต้องการ soft entry สู่ chatbot และระบบช่วยเหลือ

---

## 6. Working Rules

1. Character Bible เป็น law สูงสุดของ content
2. Safety by Design Framework เป็น law สูงสุดของ safety
3. Claude Code ทำ feature ตาม spec เท่านั้น ห้ามเปลี่ยน clinical/content logic เอง
4. ถ้า AI 2 ตัวเห็นต่างกัน ให้ Clinical/Product Director ตัดสิน ไม่ใช้ majority vote
5. ถ้างานขัดกับ Product Principles ให้หยุดและ review ก่อน implement

---

## 7. Gold Standard Tracks

- **T15 คืนที่บ้านมินนา** = system benchmark (ensemble / belonging / gratitude)
- **T16 ใบบัวกับเสียงในใจ** = safety-sensitive benchmark (disclosure / rejection / self-compassion / inner voice)

ทุก track ที่ complexity สูงควรเทียบกับ T15/T16 ก่อนเสมอ

---

## 8. What Success Looks Like

Minna สำเร็จเมื่อ
- เด็กเล่นแล้วไม่รู้สึกถูกตัดสิน
- เด็กเห็นทางเลือกของตัวเองชัดขึ้น
- badge และ summary มีความหมายจริง ไม่ใช่แค่ตกแต่ง UX
- เกมเชื่อมกลับสู่น้องฮักได้อย่างเป็นธรรมชาติ
- ทีม AI และทีมคนทำงานจากกติกาเดียวกัน

---

## 9. Final Position Statement

Minna Journey ไม่ได้ออกแบบให้เด็กเลือกคำตอบที่ถูก แต่เพื่อให้เด็กกลับมาเห็นตัวเองมากขึ้นทุกครั้งที่เล่น ผ่านเรื่องราว ทางเลือก badge ความทรงจำ การเล่นซ้ำ และความเข้าใจอย่างอ่อนโยน โดยมีน้องฮักเป็น ecosystem รองรับ มีห้องรายตัวละครเป็นพื้นที่เก็บความหมายของแต่ละเส้นเรื่อง และมีมนุษย์เป็นผู้คุมทิศทางด้านความหมาย ความปลอดภัย และคุณค่าทางคลินิกเสมอ
