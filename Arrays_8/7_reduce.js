'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const balance = movements.reduce(function (acc, cur, i, arr) {
    // console.log(`Iteration: ${i}: ${acc}`);
    return acc + cur;
}, 0)
console.log(balance);


//Maximum value

const max = movements.reduce((acc, cur, i) => {
    console.log(acc);

    if (acc > cur) {
        return acc;
    } else {
        return cur;
    }
}, movements[0]);
console.log(max);