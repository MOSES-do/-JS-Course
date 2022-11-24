'use strict';


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((mov) => {
    return mov > 0;
});
console.log(deposits);

const withdrawal = movements.filter((mov) => {
    return mov < 0;
});
console.log(withdrawal);