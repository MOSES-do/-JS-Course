'use strict';

//Just as the arr.includes() only checks if an array item exists ie. checks for equality, the "some" allows for further testing using conditional statements.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// console.log(movements.includes(-130)); //true


console.log(movements.some(mov => mov > 1500)); //true



