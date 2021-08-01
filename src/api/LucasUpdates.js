const _weeks = [
    { "id": 0, "weekNum": 1, "weeklyPicture": require("../assets/day1.jpg"), "weight": 1540, "length": 39 },
    { "id": 1, "weekNum": 2, "weeklyPicture": require("../assets/day8.jpg"), "weight": 1350, "length": 39 },
    { "id": 2, "weekNum": 3, "weeklyPicture": require("../assets/day15.jpg"), "weight": 1580, "length": 39 },
    { "id": 3, "weekNum": 4, "weeklyPicture": require("../assets/day22.jpg"), "weight": 1695, "length": 39 },
    { "id": 4, "weekNum": 5, "weeklyPicture": require("../assets/day29.jpg"), "weight": 1980, "length": 42 },
    { "id": 5, "weekNum": 6, "weeklyPicture": require("../assets/day36.jpg"), "weight": 2115, "length": 43 },
    { "id": 6, "weekNum": 7, "weeklyPicture": require("../assets/day43.jpg"), "weight": 2420, "length": 43 }
]
const _dailyUpdates = [
    { "id": 0, "weekId": 0, "date": "6/19/2021", "details": "Born Today! It's cold out here!", "weight": 1540, "additionalDetails": "Luke was born after complications due to pre-eclampsia. Kelly's Liver was secreting proteins showing it was starting to fail, so the doctors induced labor for vaginal delivery. Luke then switch between breach and transverse positions, and so the doctors advised a c-section while Luke's levels were strong. And so we had our baby boy early at 33 weeks, 4 days gestation.", "dailyPicture": require("../assets/day1.jpg")},
    { "id": 1, "weekId": 0, "date": "6/20/2021", "details": "My nose air is less, and I'm doing great!", "weight": 1200, "additionalDetails": "Luke required a CPAP at first to help his lungs remain open while they absorbed the amniotic fluid and expanded their tiny air sacs. He was on room oxygen from the start, which is a great sign.", "dailyPicture": require("../assets/day2.jpg")},
    { "id": 2, "weekId": 0, "date": "6/21/2021", "details": "Big nose thingy gone, just tiny hose now.", "weight": 1240, "additionalDetails": "Luke's lungs are strong! He was able to get off his CPAP completely, and is now on a high-flow nose cannula at 4 litres.", "dailyPicture": require("../assets/day3.jpg")},
    { "id": 3, "weekId": 0, "date": "6/22/2021", "details": "Tiny nose hose is reduced, shiny light is annoying", "weight": 1230, "additionalDetails": "Luke's bilirubin levels were elevated, and so he needed some photo therapy to combat jaundice. His levels weren't alarmingly high, the doctors are just being cautious due to his premature status.", "dailyPicture": require("../assets/day4.jpg")},
    { "id": 4, "weekId": 0, "date": "6/23/2021", "details": "Big blue light today, Mommy was able to leave the hospital, AND no more tiny nose hose!", "weight": 1250, "additionalDetails": "Luke was able to get off of the high-flow nose cannula today since he was keeping his O2 saturation during his weaning process. His bilirubin levels are getting better, but he still requires a little more phototherapy for now. Luke also got something called an infiltration today, where his pick line IV caused his vein to blow. His nurse recognized it within moments of it happening, and was able to take the necessary steps to help save him. We're so grateful for these wonderful NICU nurses!", "dailyPicture": require("../assets/day5.jpg")},
    { "id": 5, "weekId": 0, "date": "6/24/2021", "details": "No more sticky needles! Just milk now!", "weight": 1280, "additionalDetails": "The doctors were able to remove his new IV, and now he just needs milk through his NG tube! Our little man is getting so strong, it gives us hope!", "dailyPicture": require("../assets/day6.jpg")},
    { "id": 6, "weekId": 0, "date": "6/25/2021", "details": "I graduated to level 2 today for healthy babies!", "weight": 1320, "additionalDetails": "Today we were told that Luke is doing so well that he \"Graduated\" to Level 2, which is a group of babies that are considered super-healthy! We're so proud of our little man!", "dailyPicture": require("../assets/day7.jpg")},
    { "id": 7, "weekId": 1, "date": "6/26/2021", "details": "No more risk of jaundice, and Daddy helped Mommy give me a bed bath!", "weight": 1350, "additionalDetails": "We were able to give Luke his first bath today! Kelly worked with him to breastfeed, but he wasn't feeling it. And his bilirubin levels are now self-resolving, so he no longer needs phototherapy!", "dailyPicture": require("../assets/day8.jpg")},
    { "id": 8, "weekId": 1, "date": "6/27/2021", "details": "Latched onto Mommy today! And am now back into the 3 pound range!", "weight": 1400, "additionalDetails": "His care plan is simply let him rest and eat and grow. He had a couple of stat dips while doing skin-to-skin, but that was just how he was held. Little guy is doing great.", "dailyPicture": require("../assets/day9.jpg") },
    { "id": 9, "weekId": 1, "date": "6/28/2021", "details": "Flew to a new hostpital today, and they did a kitty scan on me. Kinda groggy today, but still doing good.", "weight": 1535, "additionalDetails": "Transferred to Primary Childrens today after the NICU nurse noticed the redness on his neck that we pointed out started expanding. CT Scan at Primary Children's helped them to identify it as Cellulitis, and he's on antibiotics to treat that now. We will most likely do more tests to find out what the mass underneath the infection is, and how we will handle it.", "dailyPicture": require("../assets/day10.jpg") },
    { "id": 10, "weekId": 1, "date": "6/29/2021", "details": "Had to get intubated today cause my neck was swollen with infection. I made it through everything okay, and they're draining my owie in my neck.", "weight": 1535, "additionalDetails": "Luke had to get intubated in the OR because his airway was collapsing. They were able to intubate, and then the Interventive Radiology team drained his abscess, and put a shunt in to allow it to finish draining over the next few days. He'll be intubated until they take the shunt out.", "dailyPicture": require("../assets/day11.jpg") },
    { "id": 11, "weekId": 1, "date": "6/30/2021", "details": "Doctors found MRSA in the juice from my owie. They already are giving me meds for it though, so I'll be OK!!", "weight":1535, "additionalDetails": "The doctors found MRSA in the pus that was drained from Luke's abscess. It's very treatable with the antibiotic they already had him on. We do not know how he got the infection, and they're looking into it.", "dailyPicture": require("../assets/day12.jpg") },
    { "id": 12, "weekId": 1, "date": "7/1/2021", "details": "I am eating more food, and took my first poop at this new NICU! Daddy also gave me a hand hug, for the first time in days!", "weight": 1510, "additionalDetails": "Luke is pooping again, and they're increasing his feed, which should help a lot with his weight gain. His MRSA meds were changed to fight his particular strain more effectively, and once he's healed up he is no longer contagious!", "dailyPicture": require("../assets/day13.jpg") },
    { "id": 13, "weekId": 1, "date": "7/2/2021", "details": "Doctors say I get my drain tube out of my owie tomorrow! Daddy got to hold me for the first time since I came to the new NICU!", "weight": 1510, "additionalDetails": "Luke's progress is great, and there hasn't been any new fluid to drain the last 24 hours from his abscess. Doctors will remove the drain tomorrow, and as long as no flare-ups occur, he'll be extubated the following day! Also, the Disease Team Doctors stopped by to say that when we take Luke home, he's not going to be contagious, and that no extra precautions are needed!!!", "dailyPicture": require("../assets/day14.jpg") },
    { "id": 14, "weekId": 2, "date": "7/3/2021", "details": "I got my drain tube out today! I feel sooo much better without it! And I weigh more than the day I was born!", "weight": 1580, "additionalDetails": "Luke's drainage tube required some assistance from the Interventive Radiology doctors to remove since it was a newer drain type. He's doing much better, and his pain levels are much more manageable.", "dailyPicture": require("../assets/day15.jpg") },
    { "id": 15, "weekId": 2, "date": "7/4/2021", "details": "Happy Birthday Mommy!! The Doctors \"Extubed\" me today, and now I have a belly button!! Happy 4th of July everyone!", "weight": 1590, "additionalDetails": "Luke got extubated today, which was wonderful because now our little man is breathing without the ventilator. His umbilical cord fell off, so now he has the CUTEST belly button! We're so happy that he's no longer hooked up to those machines, although he does have a nasal cannula just until he is used to being off the ventilator.", "dailyPicture": require("../assets/day16.jpg") },
    { "id": 16, "weekId": 2, "date": "7/5/2021", "details": "I'm doing really good, but have tiny nose tube again while I recover from everything still.", "weight": 1600, "additionalDetails": "Luke has a nasal cannula while he recovers from being on ventilation. He is taking all his medications orally now, and so tomorrow we'll be removing his leg IV!! He also has been doing great maintaining body temperature, so a crib is coming up soon!!", "dailyPicture": require("../assets/day17.jpg") },
    { "id": 17, "weekId": 2, "date": "7/6/2021", "details": "Today I wore my first preemie outfits! I also got to be held skin-to-skin with Mommy, and the ENT doctors said my neck looked great!", "weight": 1610, "additionalDetails": "Luke still has some difficulty breathing while he recovers from his intubation, but he's still doing great. The nurses are going to take out his Extended Dwell IV tonight at midnight as long as he tolerates his full feeds.", "dailyPicture": require("../assets/day18.jpg") },
    { "id": 18, "weekId": 2, "date": "7/7/2021", "details": "I got a new bed today! And no more sticky needles to help feed me, I'm back on the bottle for all my food needs! High Five!!!", "weight": 1590, "additionalDetails": "Luke got his Extended Dwell IV removed today, and he also was moved to a crib since he's maintaining his own body temperature now! The doctors are also starting him on a regiment to get him bottle feeding so that he can eventually get off his NG Tube!", "dailyPicture": require("../assets/day19.jpg") },
    { "id": 19, "weekId": 2, "date": "7/8/2021", "details": "Today was a semi-scary day when the nurse felt a lump on my throat. They had a guy do an scan of my neck, and it turned out to be nothing! Phew!!!", "weight": 1610, "additionalDetails": "Luke was more alert and awake than any other day so far in his little life! He did have a lump on his throat, and after an ultrasound, the radiologist determined it was nothing at all, and that we didn't need to worry. He's doing good, and slowly re-gaining his weight back.", "dailyPicture": require("../assets/day20.jpg") },
    { "id": 20, "weekId": 2, "date": "7/9/2021", "details": "My little lump is gone from yesterday completely, so no worries at all! I'm also doing much better and staying awake when Mommy and Daddy visit!", "weight": 1620, "additionalDetails": "Luke is doing really well with his alertness, and is almost completely recovered from his abscess surgery. The doctor's say he is no longer in need of his pain meds, and the focus is completely on his growth and switching to bottle-feeding.", "dailyPicture": require("../assets/day21.jpg") },
    { "id": 21, "weekId": 3, "date": "7/10/2021", "details": "I got a toy today! I love it soooo much!!! I'm also almost off of my nose tube again!!!!", "weight": 1695, "additionalDetails": "Luke has been gaining a lot of weight, and is doing good. The focus now is him resting, growing, and learning how to bottlefeed. We are also happy that he is on 1/8th of a litre of air now!", "dailyPicture": require("../assets/day22.jpg") },
    { "id": 22, "weekId": 3, "date": "7/11/2021", "details": "Doctors say I just need to sleep and grow!! So today I rested on Mommy while Daddy read me some stories.", "weight": 1730, "additionalDetails": "Luke's recovery and health are doing great! He is so much more alert and active during our visits, it warms our hearts so much. We are hopeful he'll be home before his due date!", "dailyPicture": require("../assets/day23.jpg") },
    { "id": 23, "weekId": 3, "date": "7/12/2021", "details": "Today I did a video call with my brother Trison while Daddy held me. I'm also doing really well gaining my weight, and am almost 4 pounds!", "weight": 1780, "additionalDetails": "Luke is still on his nasal cannula with a very low-flow. We spoke to his Nurse Practitioner, and they're going to do a trial \"Room Air Only\" tomorrow to see if they can just remove his nasal cannula for good!", "dailyPicture": require("../assets/day24.jpg") },
    { "id": 24, "weekId": 3, "date": "7/13/2021", "details": "I finished my medicine for my MRSA today, and the doctors say my blood tests showed no signs of infection!!! They also scanned my brain, and it looks normal too!", "weight": 1795, "additionalDetails": "Luke is officially full term (37 weeks gestation) today! He had some reflux that lead to him having a Bradycardia event that worried us because of the last one he had. But the nurses and doctors are sure it's just reflux. They are going to monitor him closely though to ensure no other Bradys(Bradycardia Events) occur. He is also off of his antibiotics, and is no longer showing signs of infection! And finally, the doctors did an ultrasound of his brain to make sure it looked as they expected now that he's full term -- and it looked great!", "dailyPicture": require("../assets/day25.jpg")},
    { "id": 25, "weekId": 3, "date": "7/14/2021", "details": "Mommy and Daddy are super excited that I weigh 4 pounds as of today! I also am doing a room air trial! Hopefully no more nose hose!", "weight": 1845, "additionalDetails": "Today Luke hit 4 pounds, and we are so excited to see this little man growing so much!!! He's also doing a room air trial to make sure his O2 saturation doesn't drop below 92 (except when he's upset/crying). If he does good, he should be off of his nasal cannula for good!!!", "dailyPicture": require("../assets/day26.jpg") },
    { "id": 26, "weekId": 3, "date": "7/15/2021", "details": "Today my wound where my drain tube was no longer needs to be covered!!! I'm doing really good, and am still growing really well.", "weight": 1900, "additionalDetails": "Luke has done really good on his room air trial, and he is continuing to maintain his saturation off of his nasal cannula. As long as he makes it tonight without it, we can remove the special pads on his face for the cannula! We're so happy that he's doing so great. Such a strong boy!", "dailyPicture": require("../assets/day27.jpg") }, 
    { "id": 27, "weekId": 3, "date": "7/16/2021", "details": "My nurses and doctors say I'm growing great! I just need to start using bottles to eat, then I can come home!!", "weight": 1970, "additionalDetails": "We spoke to the Nurse Practitioner today about what milestones Luke needs to hit, and the focus is on him learning how to eat with his mouth. We're so close to having this little man home!!", "dailyPicture": require("../assets/day28.jpg") },
    { "id": 28, "weekId": 4, "date": "7/17/2021", "details": "Today my Bumba gave me a cool little hat! It fits perfectly on my teenie head!!", "weight": 1980, "additionalDetails": "Luke outgrew his first blood pressure cuff today!! We get to keep it for memoribilia when this whole thing is put behind us. We're so excited that our little man is growing so well. Also, he looked beyond adorable in the little hat that Bumba made him!", "dailyPicture": require("../assets/day29.jpg") },
    { "id": 29, "weekId": 4, "date": "7/18/2021", "details": "Mommy and Daddy helped wash my hair, and gave me a comb-over! Doctors decided to run some tests to make sure I am doing okay since I've had a few more BradyCardia events lately.", "weight": 2025, "additionalDetails": "Luke had an episode where he had some reflux, and held his breath too long. He started to turn blue, and we had to get all the nurses in to help him. They ran some tests and everything looks great so far, we just need to wait for his blood and urine cultures to come back to be 100% sure.", "dailyPicture": require("../assets/day30.jpg") },
    { "id": 30, "weekId": 4, "date": "7/19/2021", "details": "I'm one month old today!! And I also drank milk for the first time today!! I did so good, but boy did I get tired!", "weight": 2025, "additionalDetails": "Today our beautiful baby boy turned one month old! It blows our mind he's been in the NICU for a whole month now. He decided to surprise us with drinking 11 ML of milk from his bottle for his noon feeding!! We are so excited that he was able to do this, and starting tomorrow, we get to try and bottle feed our little man! Additionally, the cultures on his blood and urine came back negative!! Such a great day today.", "dailyPicture": require("../assets/day31.jpg") },
    { "id": 31, "weekId": 4, "date": "7/20/2021", "details": "Daddy fed me today after Mommy clipped my fingernails! I'm still doing great, and just working on feeding from the bottle. My bradycardia incidents have also gone away for now!", "weight": 2035, "additionalDetails": "Today at 38 weeks (gestation) Dad got to feed Lucas, and it was an amazing session! He didn't have a whole lot by mouth, but Dad learned a lot about feeding our little man. Tomorrow Mom gets a turn to feed Luke, and we're so excited!!! His Bradycardias seem to be going away, which is great because it allows our boy to focus all of his energy on learning to bottle feed.", "dailyPicture": require("../assets/day32.jpg") },
    { "id": 32, "weekId": 4, "date": "7/21/2021", "details": "Mommy's turn to feed me today! I got super sleepy, so we stopped early. I still drank 2 1/2 teaspoons though!", "weight": 2075, "additionalDetails": "Luke's progressing slowly but surely with his oral feedings. Today we didn't get as much as we hoped, but it was a great learning experience for Mom and Dad. We are so excited that his developmentalist has such confidence in us to feed our son without her present starting tomorrow!!", "dailyPicture": require("../assets/day33.jpg") },
    { "id": 33, "weekId": 4, "date": "7/22/2021", "details": "I took almost half my bottle today when Daddy fed me! I'm so excited to be eating more and more each day!! Soon I should be able to eat enough where I can come home!!", "weight": 2100, "additionalDetails": "Today Luke was a little bit fussy when we visited, but he still had a successful feeding session. It's so great to watch our little man grow! The hospital staff said that we needed to get Luke to 80% of his daily nutrition by bottle before they'd be okay to send him home, and he's currently at 25%. This means he may not get home until around August 10th or 17th, depending on his progress.", "dailyPicture": require("../assets/day34.jpg") },
    { "id": 34, "weekId": 4, "date": "7/23/2021", "details": "Daddy found this neat mirror that has a handsome little baby boy in it! Between that and Mommy feeding me, it was a great day!", "weight": 2150, "additionalDetails": "Luke is doing good, with the focus on his bottle feeding still. We're really happy that there's nothing new to report, that means our little man is doing amazing!!", "dailyPicture": require("../assets/day35.jpg") }, 
    { "id": 35, "weekId": 5, "date": "7/24/2021", "details": "Last night I finished not just my first full bottle, but two full bottles!! I even decided to take 3/4 of a bottle when Daddy fed me today! I love the taste of milk!", "weight": 2115, "additionalDetails": "Luke has taken 2 full bottles, and 3/4 of another in the last 24 hours! We're so excited that he's increasing his oral intake of milk!! He did lose a little bit of weight, but since that's his first weight loss since his birth, we're not too concerned. We'll watch his weight gain closely, and adjust his feed amounts as needed.", "dailyPicture": require("../assets/day36.jpg") },
    { "id": 36, "weekId": 5, "date": "7/25/2021", "details": "I have been drinking lots of milk, and growing really fast! The doctors and nurses mentioned that I may come home soon! I'm so excited to meet my whole family!", "weight": 2210, "additionalDetails": "We're thrilled with how well Luke is growing, and how much milk he's taking orally!! The nurses and doctors have given us a tentative date for when he can come home! (We will let you know when the actual date is when it's confirmed). So excited that this little man will be home soon!", "dailyPicture": require("../assets/day37.jpg") },
    { "id": 37, "weekId": 5, "date": "7/26/2021", "details": "Today I got to try out my new car seat!! Mommy and Daddy promised I'd be safe when they get to take me home!", "weight": 2260, "additionalDetails": "We had an appointment with Primary Children's Hospital to get our car seat inspected and fitted for Luke! We're getting really close to being able to bring this little man home, and needless to say, we are sooo excited!!", "dailyPicture": require("../assets/day38.jpg") },
    { "id": 38, "weekId": 5, "date": "7/27/2021", "details": "I am officially in the five pound club! I also passed my hearing test with flying colors! The nurses did some test to make sure I'm okay, and everything was great!", "weight": 2300, "additionalDetails": "Luke's doctors ran tests on his heart today to see if they could find what was going on with his constant bradycardias. His ultrasound revealed he has what is known as an Atrial Septal Defect (ASD). It's not life-threatening, and usually resolves with age. The doctors assured us that this wasn't anything they were worried about, and that Luke is going to be a-okay. He's also at 39 weeks gestationally, which means his original due date is right around the corner!", "dailyPicture": require("../assets/day39.jpg") },
    { "id": 39, "weekId": 5, "date": "7/28/2021", "details": "I was super upset today when I got my cares. But thank goodness Daddy was there for some snuggles and skin-to-skin.", "weight": 2300, "additionalDetails": "Luke was especially upset today, and got so worked up, he only drank a little by bottle, with most of his feed needing to get tubed. Once he snuggled with Dad, he rested really well. Poor little guy must be tired of not being home!", "dailyPicture": require("../assets/day40.jpg") },
    { "id": 40, "weekId": 5, "date": "7/29/2021", "details": "Today Mommy and Daddy visited later so they could go to a discharge class! We're getting close!", "weight": 2330, "additionalDetails": "Tonight we went to the 6pm cares so we could go to the discharge class tonight, where we learned CPR for little Lucas. He was super alert and awake for the visit tonight, and it was great to chat with him. We're so in love with this little man, and somehow fall more in love with him every day.", "dailyPicture": require("../assets/day41.jpg") },
    { "id": 41, "weekId": 5, "date": "7/30/2021", "details": "I ate super good for Daddy! When he was trying to burp me, I let out my first big burp! I even startled Mommy!", "weight": 2380, "additionalDetails": "We're so excited with his growth, and hope with his size increases that we will see a decrease in his bradycardia events. Additionally, today was the first time we got a really good burp out of him during his feeding break. It was so loud that it startled his Mom really good.", "dailyPicture": require("../assets/day42.jpg") },
    { "id": 42, "weekId": 6, "date": "7/31/2021", "details": "Today marks 24 hours without any bradycardia events!! I also nursed on Mommy today!!", "weight": 2420, "additionalDetails": "Luke has gone over 24 hours without a bradycardia event. If he can keep it up, and have no more, then we can discuss him coming home much sooner!! He's also been doing really good eating by mouth, and his nurses and doctors are considering taking out the NG Tube!! One day at a time!!", "dailyPicture": require("../assets/day43.jpg") }
]
const _family = [
    { "id": 0, "name": "Curt Houghton", "relation": "Daddy", "birthDate": "10/28/1988", "birthWeight": 4366, "birthLength": 48.3, "photo": require("../assets/daddy.jpg") },
    { "id": 1, "name": "Kelly Houghton", "relation": "Mommy", "birthDate": "7/4/1984", "birthWeight": 2382, "birthLength": 48.3, "photo": require("../assets/mommy.jpg") },
    { "id": 2, "name": "Trey Parks", "relation": "Brother", "birthDate": "4/12/2010", "birthWeight": 4423, "birthLength": 54.7, "photo": require("../assets/TAPH_main.jpg") },
    { "id": 3, "name": "Trison Gardner", "relation": "Brother", "birthDate": "8/16/2010", "birthWeight": 3714, "birthLength": 50.8, "photo": require("../assets/TKG_main.jpg") },
    { "id": 4, "name": "Peiper Tomlinson", "relation": "Sister", "birthDate": "11/9/2014", "birthWeight": 3714, "birthLength": 53.5, "photo": require("../assets/PJT_main.jpg") }
]

const _lucas = { 
    "id": 61921154039, 
    "name": "Lucas James Houghton", 
    "birthDate": "6/19/2021", 
    "birthTime": "10:22 AM", 
    "birthWeight": 1540, 
    "birthLength": 39, 
    "isDischarged": false,
    "dischargeDate": "",
    "dischargeWeight": 0,
    "dischargeLength": 0,
    "photo": require("../assets/main_ljh.jpg") 
}

export default {
    getWeeks(cb) {
        setTimeout(() => cb(_weeks), 100);
    },
    getDailyUpdates(cb) {
        setTimeout(() => cb(_dailyUpdates), 100);
    },
    getFamily(cb) {
        setTimeout(() => cb(_family), 100);
    },
    getLucas(cb) {
        setTimeout(() => cb(_lucas), 100);
    }
}