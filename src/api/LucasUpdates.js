const _weeks = [
    { "id": 0 , "weeklyPicture": "https://i.imgur.com/veaZVZ0.jpeg", "weight": 1540, "length": 38 }
]
const _dailyUpdates = [
    { "id": 0, "weekId": 0, "date": "6/19/2021", "details": "Born Today! It's cold out here!", "weight": 1540, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": "https://i.imgur.com/veaZVZ0.jpeg"},
    { "id": 1, "weekId": 0, "date": "6/20/2021", "details": "My nose air is less, and I'm doing great!", "weight": 1180, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": "https://i.imgur.com/veaZVZ0.jpeg"},
    { "id": 2, "weekId": 0, "date": "6/21/2021", "details": "Big nose thingy gone, just tiny hose now.", "weight": 1200, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": "https://i.imgur.com/veaZVZ0.jpeg"},
    { "id": 3, "weekId": 0, "date": "6/22/2021", "details": "Tiny nose hose is reduced, shiny light is annoying", "weight": 1210, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": "https://i.imgur.com/veaZVZ0.jpeg"},
    { "id": 4, "weekId": 0, "date": "6/23/2021", "details": "Big blue light today, Mommy was able to leave the hospital!", "weight": 1230, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": "https://i.imgur.com/veaZVZ0.jpeg"},
    { "id": 5, "weekId": 0, "date": "6/24/2021", "details": "No more hose or sticky needles!", "weight": 1250, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": "https://i.imgur.com/veaZVZ0.jpeg"},
    { "id": 6, "weekId": 0, "date": "6/25/2021", "details": "I graduated to level 2 today for healthy babies!", "weight": 1280, "additionalDetails": "Luke was born after complications due to pre-eclampsia.", "dailyPicture": "https://i.imgur.com/veaZVZ0.jpeg"}
]

export default {
    getWeeks(cb) {
        setTimeout(() => cb(_weeks), 100);
    },
    getDailyUpdates(cb) {
        setTimeout(() => cb(_dailyUpdates), 100);
    }
}