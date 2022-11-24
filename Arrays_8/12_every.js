'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//Returns true only when condition is true in all instances
console.log(movements.every(mov => mov > 0)); //false


//Separate callback from array method, makes it reusable

const deposit = mov => mov > 0;
console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(movements.filter(deposit));
