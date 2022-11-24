'use strict';

//Base 10 - 0 -to 9
//Binary base 2 - 0 to 1

//Conversion of string to number
console.log(Number('23')); //23
console.log(+'23'); //Seeing the plus sign J.S performs type coercion 

//Parsing
console.log(Number.parseInt('30px', 10));  //30
console.log(Number.parseInt('e23', 10));  //NaN

console.log(Number.parseInt('2.5rem')); //2.5

//Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));


//Checking if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));



///////////////////////////
//Math space
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));


console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2));   //23
console.log(Math.max(5, 18, '23px', 11, 2));   //NaN

console.log(Math.min(5, 18, 23, 11, 2))//2

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

//Random number BTW 10 and 20
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(10, 20);


//Roundung Integers
console.log(Math.trunc(23.3))
/* 
2. Math.round
3. ceil
4. floor
*/



//Rounding Decimals
console.log((2.7).toFixed(0));  //3
console.log((2.7).toFixed(3));  //2.700
console.log((2.345).toFixed(2));  //2.35
console.log(+(2.345).toFixed(2));  //2.35



//Remainder operator

console.log(5 % 2);


const num = [1, 2, 3, 4, 5, 6];

for (const n of num) {
    if (n % 2 === 0) {
        console.log(`Even number: ${n}`)
    } else {
        console.log(`Odd number: ${n}`)

    }
}


console.log('====Using map====')
num.map((n) => {
    n % 2 === 0 ? console.log(`Even number: ${n}`)
        : console.log(`Odd number: ${n}`)
})

//Using the spread operator 
labelBalance.addEventListener('click', function () {
    //Selecting even and odd rows
    [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
        if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    })
})



//Separator using underscores
const diameter = 287_460_000_000;
console.log(diameter);


console.log(Number('230000'))// 230000
console.log(Number('230_000'))// NaN


//Javascript's maximum safe number
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(BigInt(373664));
