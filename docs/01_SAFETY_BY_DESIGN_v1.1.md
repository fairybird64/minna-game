# Minna Journey — Safety by Design Framework v1.1
## Governing Safety Document for Content, UX, and Release

**Document status:** Locked draft for working reference  
**Owner:** Clinical / Product Director  
**Applies to:** Minna Lab, Minna Beta, Minna Live in Nong Hug  
**Purpose:** ใช้เป็นกรอบอ้างอิงหลักด้านความปลอดภัยเชิงออกแบบของ Minna Journey

---

## 1. Purpose of This Document

เอกสารฉบับนี้กำหนดกรอบความปลอดภัยของ Minna Journey เพื่อให้เกมยังคงเป็นพื้นที่อ่อนโยน ปลอดภัย และไม่ตีตราเด็ก แม้จะเล่าเรื่องที่แตะปัญหาจริงของวัยรุ่นไทย เช่น shame, anxiety, rejection, disclosure, family wound, self-worth, perfectionism, identity, และประเด็นที่อาจเชื่อมโยงกับ NSSI หรือ substance use ในกรอบ psychoeducation

เอกสารนี้ไม่ใช่ protocol ทางคลินิก ไม่ใช่เกณฑ์วินิจฉัย และไม่ใช่ระบบ red flag detection ภายในเกม  
เอกสารนี้คือ **product safety framework** สำหรับเกม universal prevention ที่ใช้ narrative, choice, badge, summary, replay, และ room system เพื่อช่วยให้ผู้เล่นเห็นใจตัวเองมากขึ้นโดยไม่ถูกตัดสิน

---

## 2. Core Safety Position

### 2.1 Safety by Design, not Detection

จุดยืนหลักของ Minna Journey คือ:

> **ความปลอดภัยของเกมอยู่ที่การออกแบบ ไม่ใช่การตรวจจับ**

ดังนั้น Minna Journey จะ **ไม่ใช้**
- stuck count เป็น distress trigger
- choice pattern เป็น proxy ของ crisis
- replay count เป็น risk indicator
- pop-up อัตโนมัติจากพฤติกรรมในเกม
- การ inference ว่าผู้เล่น “หนัก” จากสิ่งที่เลือก

### 2.2 Clinical Reasoning

เหตุผลของจุดยืนนี้คือ Minna เป็น reflective narrative game ในระดับ universal prevention ไม่ใช่ clinical intervention และ choice ภายในเกมเป็นเพียง “continuum ของการรับมือ” ไม่ใช่ตัวชี้วัดภาวะวิกฤต

การเลือก stuck อาจสะท้อน
- ความซื่อสัตย์
- resonance กับเรื่อง
- วิธีรับมือที่คุ้นเคย
- การลองสำรวจตัวเอง

และ **ไม่ควรถูกตีความอัตโนมัติว่าเป็น distress signal**

### 2.3 What This Means in Practice

- เกมจะไม่ trigger soft exit เอง
- เกมจะไม่เด้งเตือนว่าผู้เล่นควรหยุด
- เกมจะไม่แปลผลผู้เล่นจากสิ่งที่เลือก
- เกมจะใช้ language safety, containment, passive exit, และ integration กับ Nong Hug เป็น safety layer แทน

---

## 3. Position of Minna in the Nong Hug Ecosystem

Minna ไม่ใช่ standalone product แต่เป็น **โมดูลหนึ่งภายใน Nong Hug chatbot ecosystem** ซึ่งทำงานภายใต้กรอบ USI ของน้องฮัก

### 3.1 Three-tier Boundary

- **Minna Journey** = reflective narrative / universal prevention
- **Nong Hug chatbot** = conversation space / support bridge
- **Clinical care** = ระบบบริการจริงนอกเกม

### 3.2 Safety Implication

เพราะ Minna อยู่ใน Nong Hug อยู่แล้ว การออกจากเกมไม่ได้หมายถึงออกจากระบบ แต่หมายถึงการกลับไปอยู่ใน chatbot ซึ่งเป็นพื้นที่สนทนาต่อได้ตามธรรมชาติ

ดังนั้น escalation pathway ของ Minna ไม่จำเป็นต้องสร้างระบบ detection ซ้ำ แต่ต้องทำให้ “ทางกลับไปหาน้องฮัก” มีอยู่ชัดและใช้ได้จริง

---

## 4. Safety Objectives

Minna ต้องทำให้ผู้เล่นรู้สึกว่า

1. เขาไม่ถูกตัดสินจากสิ่งที่เลือก
2. เขาสามารถอยู่กับความรู้สึกได้โดยไม่ต้องรีบโอเค
3. เขาสามารถพัก ถอย หรือออกจากเกมได้อย่างไม่เสียหน้า
4. เกมไม่กำลัง monitor หรือ classify เขา
5. ถ้าอยากคุยต่อ เขามี resource ต่อทันทีโดยไม่ต้องรอให้ระบบฟันธงว่าเขาหนักพอ

---

## 5. Scope of Safety Architecture

Safety Architecture ของ Minna ครอบคลุม 8 มิติ

1. Language Safety  
2. Narrative Containment  
3. Passive Exit & Nong Hug Integration  
4. Content Scope & Framing Rules  
5. Gentle Notice & Sensitivity Review  
6. No Open-ended Therapeutic Roleplay  
7. Pre-merge Safety Process  
8. Playtester and Home Page Safeguards

---

## 6. Language Safety Rules

### 6.1 No Shame Rule

ทุกข้อความในเกมต้องไม่ทำให้ผู้เล่นรู้สึกว่า
- เลือกผิด
- อ่อนแอ
- น่ากังวลเพราะเป็นแบบนี้
- ยังไม่ดีพอเพราะตอบแบบนี้
- มีคำตอบที่ถูกอยู่เพียงข้อเดียว

### 6.2 Honest but Gentle Rule

ภาษาของ Minna ควรเป็น
- honest
- specific
- warm
- not preachy
- ไม่ปลอบแบบกลวง
- ไม่รีบสรุป
- ไม่ fix ผู้เล่นเร็วเกินไป

### 6.3 No Diagnostic Language Rule

ผู้เล่นต้องไม่รู้สึกว่าเกมกำลังวินิจฉัย ตีความเชิงคลินิก หรือจัดระดับตัวเขา

### 6.4 Internal Logic Must Stay Internal

good / else / stuck เป็น logic ภายในของทีมพัฒนาเท่านั้น  
ห้ามแสดงต่อผู้เล่นตรง ๆ ไม่ว่าใน choice, summary, badge, share card, หรือ home

### 6.5 Summary and Badge Rule

- summary ต้องสะท้อน arc ของ protagonist ไม่ใช่วินิจฉัยผู้เล่น
- badge text ต้อง strength-based, honest, specific
- share-safe quote ต้องนุ่มกว่าข้อความในเกม

---

## 7. Narrative Containment Rules

### 7.1 Core Principle

Minna สามารถแตะประเด็นจริงได้ แต่ต้องไม่กลายเป็นการกระแทกซ้ำทางอารมณ์หรือ reenactment

### 7.2 Narrative Containment Means

- ใช้ scene-based narrative ที่มีขอบเขต
- ใช้ choice, badge, summary เป็น landing pad หลัง emotional beat
- ใช้ห้องของตัวละครแต่ละคนเป็น emotional anchor
- จบแต่ละ track ด้วยการประคอง ไม่ใช่ปล่อยแตกค้าง

**Implementation note:**  
คำว่า “ห้องของตัวละครแต่ละคน” หมายถึงห้องตาม protagonist ของ track นั้นโดยอัตโนมัติ เช่น ห้องมินนา ห้องโมเน่ ห้องหยก หรือห้องใบบัว

### 7.3 What Containment Is Not

- ไม่ใช่การหลีกเลี่ยงประเด็นหนักทุกเรื่อง
- ไม่ใช่การทำให้ทุกเรื่องเบาเกินจริง
- ไม่ใช่การปิดบังความรู้สึกยาก
- ไม่ใช่ forced positivity

### 7.4 Gold Standard Reference Tracks

เวลาตรวจความปลอดภัยเชิง narrative ให้ใช้
- **T15 คืนที่บ้านมินนา** เป็นกรณีมาตรฐานด้าน ensemble / belonging / gratitude
- **T16 ใบบัวกับเสียงในใจ** เป็นกรณีมาตรฐานด้าน disclosure / rejection / self-compassion / inner voice

---

## 8. Passive Exit & Nong Hug Integration

### 8.1 Core Rule

Minna ต้องมี **passive exit pathway** ที่มองเห็นได้ตลอด แต่ไม่ pop ขึ้นเอง

### 8.2 Required Options

อย่างน้อยต้องมี
- พักก่อน
- กลับไปห้องของตัวละครนี้
- กลับหน้าหลัก
- คุยกับน้องฮักต่อ

### 8.3 Integration Context

เพราะเกมอยู่ใน Nong Hug chatbot การกดออกจากเกมควรพาผู้เล่นกลับไปยังพื้นที่ support ของน้องฮักได้ทันที  
ดังนั้น passive exit ของ Minna ไม่ใช่ emergency system แต่เป็น **navigation bridge กลับสู่ chatbot ecosystem**

### 8.4 UI Rules

- ปุ่มต้องหาเจอจริง
- ไม่ซ่อนลึก
- ไม่ใช้สีหรือคำเตือนแบบ alarm
- ไม่แทรกกลาง emotional beat แบบทำลาย immersion

### 8.5 Suggested Copy

- พักก่อนก็ได้นะ
- กลับไปห้องของตัวละครนี้
- กลับหน้าหลัก
- อยากคุยกับน้องฮักต่อไหม

### 8.6 Protagonist Room Rendering Rule

คำว่า “ห้องของตัวละครนี้” ต้อง render ตาม protagonist ของ track นั้นโดยอัตโนมัติ

ตัวอย่าง
- track ของมินนา → “กลับไปห้องมินนา”
- track ของโมเน่ → “กลับไปห้องโมเน่”
- track ของหยก → “กลับไปห้องหยก”
- track ของใบบัว → “กลับไปห้องใบบัว”

---

## 9. Content Scope & Framing Rules

Minna **เล่าได้** แต่ต้องเล่าอย่างไรให้ปลอดภัย

### 9.1 Topics Minna Can Cover

Minna สามารถแตะประเด็นต่อไปนี้ได้
- shame / guilt / rejection
- anxiety / rumination / panic-like fear
- bullying / exclusion / peer rupture
- depression-like hopelessness ในเชิงประสบการณ์
- perfectionism / people-pleasing / imposter feelings
- LGBTQ+ self-acceptance / disclosure / fear of rejection
- NSSI, substance use, urge, หรือ crisis themes ในเชิง psychoeducation

### 9.2 Core Framing Rule

ถ้าแตะเรื่อง NSSI / substance / crisis / self-harm / severe distress  
**ต้องอยู่ใน psychoeducation frame เสมอ**

หมายถึง
- ช่วยให้เห็นวงจรใจ
- ช่วยให้เข้าใจว่าเรียนรู้ได้ เลือกได้ ยอมรับได้ ขอความช่วยเหลือได้
- ไม่ใช้เพื่อ shock
- ไม่ใช้เพื่อทำให้ผู้เล่น immerse ในอันตราย

### 9.3 Operational Rules for Sensitive Themes

#### A. Psychoeducation Frame Only
เรื่องต้องถูกเล่าเพื่อให้เข้าใจ ไม่ใช่เพื่อจำลองภาวะอันตราย

#### B. No Method / No Instructional Detail
ห้ามบรรยายวิธีทำ อุปกรณ์ ขั้นตอน วิธีปกปิด วิธีเพิ่มความรุนแรง หรือสิ่งที่นำไปเลียนแบบได้

#### C. No Glamorization
ห้ามทำให้พฤติกรรมเสี่ยงดูเท่ ลึก พิเศษ หรือเป็นทางออกที่น่าหลงใหล

#### D. No Coerced Disclosure
ห้ามบังคับให้ผู้เล่นต้องสารภาพ เปิดเผย หรือเผชิญหน้ากับเรื่องส่วนตัวลึก ๆ ภายในเกม

#### E. Must End in Containment
track ที่แตะประเด็นหนักต้องจบด้วย containment, reflection, หรือทางเชื่อมสู่ resource

### 9.4 Bridge Copy Requirement for Sensitive Tracks

หาก track แตะเรื่อง NSSI / substance / crisis / self-harm / severe distress  
นอกจาก passive exit ปกติแล้ว **ต้องมี bridge copy ตอนจบ** หรือใน summary/ending ที่ชวนออกจากเรื่องอย่างอ่อนโยนและพากลับไปสู่ resource ได้

ตัวอย่าง
- ถ้าเรื่องนี้ทำให้นึกถึงอะไรในใจ ลองกลับไปคุยกับน้องฮักต่อได้นะ
- ถ้าอยากพักก่อน ก็กลับไปที่ห้องของตัวละครนี้ก่อนได้
- ถ้าอยากคุยกับใครต่อ น้องฮักยังอยู่ตรงนี้

**Implementation note:**  
คำว่า “ห้องของตัวละครนี้” ให้ render ตาม protagonist ของ track นั้นโดยอัตโนมัติ เช่น ห้องมินนา ห้องโมเน่ ห้องหยก หรือห้องใบบัว

### 9.5 What Minna Must Not Do

- ไม่สาธิต
- ไม่ให้รายละเอียดที่ทำตามได้
- ไม่ทำให้พฤติกรรมเสี่ยงดูน่าหลงใหล
- ไม่ทำ roleplay ต่อจากประเด็นหนัก
- ไม่ชวนให้ “ทำตามเพื่อพิสูจน์อะไรบางอย่าง”

---

## 10. Gentle Notice & Sensitivity Review

### 10.1 Gentle Notice Rule

บาง track ควรมีข้อความนำสั้น ๆ ก่อนเข้า หากแตะเรื่องละเอียดอ่อนกว่าปกติ เช่น
- disclosure
- rejection
- family wound
- ambiguous loss
- identity tension
- NSSI/substance/crisis ในเชิง psychoed

### 10.2 Gentle Notice Must Be Gentle

ตัวอย่าง
- เรื่องนี้อาจแตะความรู้สึกบางอย่างในใจ ถ้าอยากค่อย ๆ เล่นก็ได้นะ
- ถ้าอยากพักก่อน ก็กลับไปห้องของตัวละครนี้ได้เสมอ
- ถ้าอยากคุยต่อ น้องฮักอยู่ตรงนี้นะ

**Implementation note:**  
คำว่า “ห้องของตัวละครนี้” ให้ render ตาม protagonist ของ track นั้นโดยอัตโนมัติ เช่น ห้องมินนา ห้องโมเน่ ห้องหยก หรือห้องใบบัว

### 10.3 Review Team

การตัดสินว่า track ไหนต้องมี gentle notice หรือ sensitivity handling เพิ่ม ต้องผ่าน
- **Clinical / Product Director**
- **ทีม review จากสมาคมพัฒนาศักยภาพมนุษย์และจิตบำบัดแนวซาเทียร์**
- **จิตแพทย์เด็กและวัยรุ่น โรงพยาบาลสวนปรุง**

### 10.4 Purpose of Review

ทีม review มีหน้าที่ดู
- framing
- wording
- containment
- resource bridge
- ความเหมาะสมต่อวัยรุ่นไทย  
ไม่ใช่แค่ตรวจคำ

---

## 11. No Open-ended Therapeutic Roleplay Rule

### 11.1 Core Rule

ใน game context ของ Minna ห้ามเปิด therapeutic dialogue แบบเปิดปลายที่ AI ต้อง improvise เอง

### 11.2 Allowed

- structured choices
- prepared reflection
- badge popup
- summary reflection
- share-safe card
- short prompt ที่มีกรอบชัด

### 11.3 Not Allowed

- live therapeutic probing
- trauma / grief / confession processing แบบเปิดปลาย
- free-form counseling chain
- asking for detailed disclosure inside the game

### 11.4 Boundary Reminder

- Minna = reflective narrative
- Nong Hug = conversation space
- Clinical care = external service

---

## 12. Content Sensitivity Note System

### 12.1 Purpose

ใช้เป็น **internal editorial note** สำหรับทีม review เท่านั้น

### 12.2 Example Note Categories

- shame
- rejection
- disclosure
- family wound
- identity
- ambiguous loss
- anxiety rumination
- self-compassion integration
- NSSI/substance/crisis psychoed

### 12.3 What the Note Is For

- decide gentle notice
- check bridge copy
- check share-safe wording
- check passive exit visibility
- decide extra review ก่อน merge

### 12.4 What the Note Is Not

- ไม่ใช่ label ของผู้เล่น
- ไม่ใช่ risk score
- ไม่ใช่ severity tier ใน UI
- ไม่ใช่ trigger engine

---

## 13. Pre-merge Checklist

สำหรับทีมพัฒนา ก่อน merge track ใหม่ทุกครั้ง  
ต้องผ่านทุกข้อก่อน merge เข้า main

### 13.1 Narrative and Inner Voice
- [ ] inner voice ถูก framing เป็น “ประโยคที่ผุดขึ้นในใจ”
- [ ] protagonist arc สอดคล้องกับ Character Bible
- [ ] ผู้ใหญ่ไม่ถูกเขียนเป็น villain แบบแบน
- [ ] ending มี containment

### 13.2 Choice and Badge Language
- [ ] choice ทั้ง 3 ข้อไม่ทำให้รู้สึกว่ามีคำตอบถูกข้อเดียว
- [ ] stuck/good/else ไม่โผล่ต่อผู้เล่น
- [ ] badge_good / badge_else / badge_stuck ไม่ shame
- [ ] badge text strength-based, honest, specific, ไม่ preachy
- [ ] badge ไม่ทำหน้าที่เหมือน score

### 13.3 Summary Reflection
- [ ] summary สะท้อน arc ของ protagonist ไม่ใช่วินิจฉัยผู้เล่น
- [ ] ไม่มีภาษาที่ตีความผู้เล่นเกินข้อมูลที่เกมรู้
- [ ] มีทางลงอย่างอ่อนโยนหลังฉากหนัก

### 13.4 Share Card Safety
- [ ] share-safe quote นุ่มกว่าข้อความในเกม
- [ ] ไม่เผย wound ตรงเกินไป
- [ ] ไม่ทำให้คนนอกสรุปตัวผู้เล่นจากการ์ดได้ง่าย
- [ ] preview ก่อนแชร์ทำงานได้จริง

### 13.5 Passive Exit Visibility

- [ ] มีทาง “พักก่อน”
- [ ] มีทางกลับ “ห้องของตัวละครนี้”
- [ ] มีทางกลับ “หน้าหลัก”
- [ ] มีทาง “คุยกับน้องฮักต่อ”

**Implementation note:**  
ในงานจริง ปุ่มนี้ต้อง render เป็นชื่อห้องตาม protagonist ของ track เช่น ห้องมินนา ห้องโมเน่ ห้องหยก หรือห้องใบบัว

### 13.6 Sensitivity Handling
- [ ] track นี้มี content sensitivity note หรือไม่
- [ ] หากมี note ได้ review gentle notice แล้วหรือยัง
- [ ] หากเป็น track sensitive ได้ review โดยทีม review แล้วหรือยัง

### 13.7 Psychoed Framing for NSSI / Substance / Crisis Themes
- [ ] เนื้อหาอยู่ใน psychoeducation frame
- [ ] ไม่มี method / instructional detail
- [ ] ไม่มี glamorization
- [ ] ไม่มี forced disclosure
- [ ] มี bridge copy ตอนจบหรือใน summary
- [ ] มี containment หรือ bridge to resource

### 13.8 Technical Integrity
- [ ] badge popup ทำงาน
- [ ] summary page ทำงาน
- [ ] room popup ทำงาน
- [ ] passive exit ทำงาน
- [ ] merge เข้า main แล้วจริง

---

## 14. Playtester Feedback Checklist

สำหรับผู้ทดสอบเกม  
หลังเล่น track ให้ถามสั้น ๆ ตามนี้

### 14.1 Feeling and Judgment
- [ ] รู้สึกถูกตัดสินไหม
- [ ] รู้สึกว่ามี choice ไหนที่ “ต้องเลือกถึงจะถูก” ไหม
- [ ] เกมทำให้รู้สึกว่า choice ของเราแย่ไหม

### 14.2 Badge / Summary Meaning
- [ ] badge ที่ได้ตรงกับเรื่องที่เพิ่งเล่นไหม
- [ ] summary สะท้อนสิ่งที่เกิดขึ้นได้พอดีไหม
- [ ] มีคำไหนที่แรงเกินไปหรือสอนเกินไปไหม

### 14.3 Emotional Containment
- [ ] มีจุดไหนที่รู้สึกหนักเกินไปหรือ overwhelmed ไหม
- [ ] ถ้าหนัก รู้ไหมว่าจะพักตรงไหน
- [ ] ทางออกจากเกมหาเจอง่ายไหม

### 14.4 Share Card Safety
- [ ] การ์ดที่แชร์เปิดเผยตัวเองมากเกินไปไหม
- [ ] ถ้าจะเอาไปแชร์จริง รู้สึกปลอดภัยไหม
- [ ] คำบนการ์ดเหมือนผลประเมิน หรือเหมือน quote ที่เก็บจากเรื่อง

### 14.5 Overall
- [ ] อยากกลับมาเล่นอีกไหม
- [ ] มีจุดไหนควรลด ไม่ใช่เพิ่ม
- [ ] มีจุดไหนที่ยังไม่อุ่นพอหรือหนักเกินพอดีไหม

---

## 15. Home Page Resource Guidance

### 15.1 Onboarding Brief

หน้า home ควรมีข้อความแนะนำสั้น ๆ ที่บอกว่า Minna คืออะไร โดยไม่ทำให้ดูเป็นแบบประเมินหรือเกมที่มีถูกผิด

**หลัก**
- ไม่มีคำตอบถูกผิด
- เล่นได้ตามใจ
- เลือกตามที่รู้สึกจริง
- อยากพักเมื่อไรก็ได้
- กลับมาเล่นใหม่ได้เสมอ

**ตัวอย่าง**
> มินนา — เส้นทางของใจ  
> เรื่องเล็ก ๆ ของวัยรุ่น และทางเลือกหลายแบบของใจ  
> ไม่มีคำตอบถูกผิด เลือกได้ตามที่รู้สึกจริง  
> อยากพักเมื่อไรก็ได้ และกลับมาเล่นใหม่ได้เสมอ

### 15.2 Resource Footer

หน้า home ควรมี **static resource footer** ไม่ใช่ popup และไม่ใช้ tone แบบ crisis alert

**Copy สำหรับ pilot**

ถ้าอยากคุยกับใครสักคน

🤍 น้องฮักพร้อมฟังอยู่เสมอ  
(กลับไปหาน้องฮักได้เลย)

📞 สายด่วนสุขภาพจิต 1323  
โทรฟรี ตลอด 24 ชั่วโมง

🏥 อยากเข้ารับบริการจริงๆ  
แอดไลน์ @MorPrompt  
แล้วค้นหา "จิตเวช" ในจังหวัดของคุณ

**หมายเหตุ Phase 2**  
เพิ่ม local resource สำหรับพื้นที่นำร่อง เช่น เชียงราย / พะเยา เมื่อทีม lock รายชื่อหน่วยบริการและช่องทางติดต่อที่จะใช้ในหน้า Live

### 15.3 Placement Rule

- วางคงที่ท้าย home page
- ไม่ใช้ modal
- ไม่เด้งแทรกการเล่น
- ควรเห็นได้เมื่อเลื่อนลง แต่ไม่แย่ง attention จากตัวเกม

---

## 16. Review and Approval Flow

### 16.1 Lab
- ทดลองได้
- เปลี่ยนได้เร็ว
- แต่ยังต้องไม่หลุด no-shame / no-roleplay / passive exit baseline

### 16.2 Beta
ก่อนเข้า Beta ต้องมี
- pre-merge checklist ผ่าน
- sensitivity note ผ่าน review
- passive exit ครบ
- home guidance baseline
- playtester checklist พร้อมใช้

### 16.3 Live in Nong Hug
ก่อนเข้า Live ต้องมี
- review จาก Clinical / Product Director
- review จากทีม Satir / CAP review team หากเป็น track sensitive
- integration path กลับสู่น้องฮักชัด
- changelog
- version note

---

## 17. What This Framework Explicitly Rejects

Framework นี้ปฏิเสธอย่างชัดเจน
1. stuck count = crisis
2. trigger-based soft exit
3. automatic distress inference from gameplay
4. clinical risk tier เป็นแกนของ Minna
5. forcing disclosure ผ่าน game mechanics
6. method detail for NSSI / substance / crisis
7. open-ended therapeutic roleplay
8. emergency-style wording ที่ทำให้ผู้เล่นสะดุ้ง

---

## 18. Minimal Requirements Before Beta

ก่อนเข้า Beta ต้องมีอย่างน้อย
- passive exit pathway ครบ รวมถึงทางกลับไปยังห้องของตัวละครตาม protagonist ของ track
- onboarding brief บน home
- resource footer บน home
- no open-ended therapeutic roleplay
- content sensitivity note system
- gentle notice template
- pre-merge checklist ใช้งานได้
- playtester checklist ใช้งานได้
- psychoed framing rule สำหรับ track ที่แตะ NSSI/substance/crisis

---

## 19. Minimal Requirements Before Live

ก่อนเข้า Live ต้องมีเพิ่ม
- integration path กับ Nong Hug ใช้งานได้จริง
- share-safe wording ครบทุกจุดที่แชร์ได้
- audit หน้า home / track / summary / room / share
- reviewer sign-off
- changelog
- version label

---

## 20. Final Position Statement

> **Minna Journey ใช้ design เป็น safety layer หลัก ไม่ใช่ระบบ detection**  
> ความปลอดภัยของ Minna มาจากภาษาที่ไม่ตัดสิน โครงสร้างที่ประคอง ขอบเขตที่ชัด ทางออกที่มีอยู่เสมอ การเชื่อมกลับสู่น้องฮักอย่างเป็นธรรมชาติ และการเล่าเรื่องที่แตะประเด็นจริงของวัยรุ่นไทยในกรอบ psychoeducation โดยไม่สาธิต ไม่ชวน reenact และไม่เปลี่ยนเกมให้เป็นพื้นที่บำบัดแบบเปิดปลาย  
> ภายในเกม ระบบ “ห้อง” ให้ใช้ห้องรายตัวละครตาม protagonist ของ track ไม่ใช้ห้องรวมแบบเดียวสำหรับทุกคน
---

## Version Note

**Minna Journey — Safety by Design Framework v1.1**

อัปเดตจาก v1.0 ดังนี้
1. เปลี่ยน Content Hard Limits เป็น Content Scope & Framing Rules
2. เพิ่มบริบท integration ว่า Minna อยู่ภายใน Nong Hug chatbot
3. เพิ่ม review team ใน section Gentle Notice
4. เพิ่ม Pre-merge Checklist
5. เพิ่ม Playtester Feedback Checklist
6. เพิ่ม Home Page Resource Guidance
7. ปรับ Resource Footer copy สำหรับ pilot
8. flag local resource เชียงราย/พะเยา เป็น Phase 2
9. คงหลักเดิมไว้ ได้แก่  
   - Safety by Design, not Detection  
   - stuck ≠ crisis  
   - No open-ended therapeutic roleplay  
   - 3-tier boundary: Minna / Nong Hug / Clinical care  
   - Lab / Beta / Live environments
