'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

//Here we simply loop over an array and create a new one
const movementsUSD = movements.map(mov => mov * eurToUsd);


console.log(movements);
console.log(movementsUSD);


/*If the map method did not exist we would have had to create and empty array and push into it using the forOf loop*/


const movementsUSDFor = [];

for (const mov of movements) movementsUSDFor.push(mov * 1.1);
console.log(movementsUSDFor);


//Using map and putting result in a new array
const movementsDescriptions = movements.map((mov, i, arr) =>

    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
    // if (mov > 0) {
    //     return `Movement ${i + 1}: You deposited ${mov}`;
    // } else {
    //     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
    // }
);

console.log(movementsDescriptions);















// const num = () => 2 + 3;
// console.log(num());