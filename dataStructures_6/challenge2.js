'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Moses', 'Moses', 'Hummels', 'Hummels', 'Hummels', 'Lewandowski'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


//1
let inc = 1;
const goals = Object.entries(game.scored);
for (const [i, score] of goals) console.log(`Goal ${inc++}: ${score}`);

//2

const averageOdds = { ...game.odds };
console.log(averageOdds);

const avr = Object.values(averageOdds);
console.log(avr);

let sum = 0;
for (const odd of avr) {
    sum += odd / avr.length;
}
console.log(sum);


//3
console.log(Object.entries(game.odds))
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(team, odd);

    console.log(`Odd of ${teamStr} ${odd}`);
}