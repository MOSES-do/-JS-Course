'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


/* 
    Array methods are simply functions attached to all arrays in J.S, this means arrays are objects and therefore have special built-in methods for working.
*/

let arr = ['a', 'b', 'c', 'd', 'e'];

//1. arr.slice() - With this we can extract part of the original array without mutating the original array.
console.log(arr.slice(2));
console.log(arr.slice(2, 4));//Excludes ending parameter index
console.log(arr.slice(-2)); //Starts from the last element of the array
console.log(arr.slice(1, -2));
//Create a shallow of copy of an array
console.log(arr.slice());//preferably for chaining
console.log([...arr]);//Using the spread operator


//2. Splice - This methods mutates the original array
// console.log(arr.splice(2)); //With this we can extract part of the original array and mutate the original array.
// console.log(arr);
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);


//3. Reverse - Mutates original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

//CONCAT - Joins two arrays
const letters = arr.concat(arr2);
console.log([...arr, ...arr2]);//spread operator
console.log(letters);


//JOIN
console.log(letters.join(' - '))


//The new "at" method - ES 2022

const arrNew = [23, 11, 64];
console.log(arrNew[0]);
console.log(arrNew.at(0));


//Getting the last value of an array
console.log((arrNew.length - 1));//bracket notation does not support method chaining
console.log(arrNew.slice(-1)[0]);
console.log(arrNew.at(-1));
