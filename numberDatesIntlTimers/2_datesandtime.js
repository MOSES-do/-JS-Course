'use strict';

//Create a date

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

/*
const now = new Date();
console.log(now);

console.log(new Date('Thu Nov 24 2022 12:18:56'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0)) //Unix time

console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/
/*
    3 - Days
    24 - hrs
    60 - minutes
    60 - seconds
    1000 - milliseconds
*/


//Date methods
const future = new Date(2037, 10, 20, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); //number of milliseonds passed since that date (Time stamp)

console.log(new Date(2142253380000));

console.log(Date.now()); //returns a time stamp of now

console.log(new Date(1669289923419));


future.setFullYear(2040);
console.log(future);


//Operations with dates
const futured = new Date(2037, 10, 20, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);


const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);


setTimeout((ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2} `), 4000, 'olives', 'spinach');

//Overiding/clearing a timeOut based on a condition

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2} `), 4000, ...ingredients);

console.log('wiaiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//SetInterval

// setInterval(function () {
//     const now = new Date();
//     console.log(now);
// }, 1000)





setInterval(function () {
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    const sec = `${now.getSeconds()}`.padStart(2, 0);
    console.log(`${day}/${month}/${year}, ${hour}:${min}:${sec}`);
}, 1000);
