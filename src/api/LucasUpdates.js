const _weeks = [
    { "id": 0, "weekNum": 1, "weeklyPicture": require("../assets/day1.jpg"), "weight": 1540, "length": 39 },
    { "id": 1, "weekNum": 2, "weeklyPicture": require("../assets/day8.jpg"), "weight": 1350, "length": 39.5 }
]
const _dailyUpdates = [
    { "id": 0, "weekId": 0, "date": "6/19/2021", "details": "Born Today! It's cold out here!", "weight": 1540, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": require("../assets/day1.jpg")},
    { "id": 1, "weekId": 0, "date": "6/20/2021", "details": "My nose air is less, and I'm doing great!", "weight": 1200, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": require("../assets/day2.jpg")},
    { "id": 2, "weekId": 0, "date": "6/21/2021", "details": "Big nose thingy gone, just tiny hose now.", "weight": 1240, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": require("../assets/day3.jpg")},
    { "id": 3, "weekId": 0, "date": "6/22/2021", "details": "Tiny nose hose is reduced, shiny light is annoying", "weight": 1230, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": require("../assets/day4.jpg")},
    { "id": 4, "weekId": 0, "date": "6/23/2021", "details": "Big blue light today, Mommy was able to leave the hospital, AND no more tiny nose hose!", "weight": 1250, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": require("../assets/day5.jpg")},
    { "id": 5, "weekId": 0, "date": "6/24/2021", "details": "No more sticky needles! Just milk now!", "weight": 1280, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": require("../assets/day6.jpg")},
    { "id": 6, "weekId": 0, "date": "6/25/2021", "details": "I graduated to level 2 today for healthy babies!", "weight": 1320, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": require("../assets/day7.jpg")},
    { "id": 7, "weekId": 1, "date": "6/26/2021", "details": "No more risk of jaundice, and Daddy helped Mommy give me a bed bath!", "weight": 1350, "additionalDetails": "We were able to give Luke his first bath today! Kelly worked with him to breastfeed, but he wasn't feeling it.", "dailyPicture": require("../assets/day8.jpg")},
    { "id": 8, "weekId": 1, "date": "6/27/2021", "details": "Latched onto Mommy today! And am now back into the 3 pound range!", "weight": 1400, "additionalDetails": "His care plan is simply let him rest and eat and grow. He had a couple of stat dips while doing skin-to-skin, but that was just how he was held. Little guy is doing great.", "dailyPicture": require("../assets/day9.jpg") },
    { "id": 9, "weekId": 1, "date": "6/28/2021", "details": "Flew to a new hostpital today, and they did a kitty scan on me. Kinda groggy today, but still doing good.", "weight": 1535, "additionalDetails": "Transferred to Primary Childrens today after the NICU nurse noticed the redness on his neck that we pointed out started expanding. CT Scan at Primary Children's helped them to identify it as Cellulitis, and he's on antibiotics to treat that now. We will most likely do more tests to find out what the mass underneath the infection is, and how we will handle it.", "dailyPicture": require("../assets/day10.jpg") },
    { "id": 10, "weekId": 1, "date": "6/29/2021", "details": "Had to get intubated today cause my neck was swollen with infection. I made it through everything okay, and they're draining my owie in my neck.", "weight": 1535, "additionalDetails": "Luke had to get intubated in the OR because his airway was collapsing. They were able to intubate, and then the Interventive Radiology team drained his abscess, and put a shunt in to allow it to finish draining over the next few days. He'll be intubated until they take the shunt out.", "dailyPicture": require("../assets/day11.jpg") }
]

export default {
    getWeeks(cb) {
        setTimeout(() => cb(_weeks), 100);
    },
    getDailyUpdates(cb) {
        setTimeout(() => cb(_dailyUpdates), 100);
    }
}