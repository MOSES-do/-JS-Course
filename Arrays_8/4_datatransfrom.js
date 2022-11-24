'use strict';

//MAP 
/*  
Used to loop over arrays just like the for each method only with a difference that map creates a brand new array based on the original array, it does not mutate the original array.
*/

//FILTER
/*
    Filter for elements in the original array which satisfy a certain condition I.E. current > 2 and returned in a new array
*/

//REDUCE
/*  
Reduce boils ("reduces") all array elements down to one single value (e.g adding all elements together);
*/


const num = [1, 2, 3, 4, 5];

let tot = 0;
for (const n of num) {
    tot += n;
}
console.log(tot);


//Using reduce
const total = num.reduce((acc, cur, i) => {
    return acc += cur;
})

console.log(total);