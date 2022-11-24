'use strict';



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("---forOf---")
for (const [i, move] of movements.entries()) {
    if (move > 0) {
        console.log(` Move ${i + 1}: You deposited ${move}`);
    } else {
        console.log(` Move ${i + 1}: You withdrew ${Math.abs(move)}`);
    }
}

console.log("---forEach---")
// movements.forEach((move) => {
//     if (move > 0) {
//         console.log(`You deposited ${move}`);
//     } else {
//         console.log(`You withdrew ${Math.abs(move)}`);
//     }
// });

//The order of params matter, they must always be in the order as shown below.

//Using forEach params(current Ele, Index No., Array)
movements.forEach((move, i, arr) => {
    if (move > 0) {
        console.log(`${i}: $ You deposited ${move}`);
    } else {
        console.log(`${i}: You withdrew ${Math.abs(move)}`);
    }
});

//When to use forEach and forOf loop???
/*
A forEach loop cannot be broken out of using (continue and break statement)
*/




//Looping Maps and Sets with forEach
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);


currencies.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
})

//Set - Sets don't have keys and indexes
const currenciesUnique = new Set(['USD', 'GBP', 'Pound', 'Euro', 'Euro']);
currenciesUnique.forEach((value, _, map) => {
    console.log(`${value}: ${value}`);
})

//"_" - throwaway value