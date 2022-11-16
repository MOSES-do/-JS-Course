'use strict';

//FIRST CLASS AND HIGHER ORDER FUCNCTIONS

/*
    First class functions enable us to write higher order functions

    - Javascript functions are "first-class citizens" - This means functions are treated as values.
    - Fn() can be stored directly ina variable or in a object as a method.

    - Functions are just another 'type' of object.

    - Pass functions as arguments to other functions by the use of eventListeners.

    - Return functions from functions

    - Call methods on functions
    E.g. counter.inc.bind(someOtherObject);


*/



/*
    Higher Order Functions

    - A function that receives another function as an argument, that returns a new function, or both.

    - This is only possible becos of first class functions
*/
//GENERIC FUNCTIONS
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};


// HIGHER ORDER FUNCTION
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);//calling the function

    console.log(`Transformed by: ${fn.name}`)//function proprty (name)
}
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);


//FUNCTIONS RETURNING FUNCTIONS
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

//Challenge 1
//Using arrow functions
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');






