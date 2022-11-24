'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book:function(){}
    //ES6 way of writing methods
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}` })
    }
}

lufthansa.book(239, 'Esumei Moses');
lufthansa.book(639, 'Esumei Moses');
console.log(lufthansa.bookings);


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

/*In a situation where we need two objects to share a method
we save the method from the first function into a variable in the global scope and of cos this is possible becos of first class functions. BUT the challenge is outside of the object the method simply becomes a regular function and the "this" keyword on a regular functions returns "undefined" in at least in strict mode :).
const book = lufthansa.book;
book(23, 'Sarah Williams');
*/

//To solve this we need a way to tell Javascript which airport we are booking with whenever we call the book method. HOW DO WE DO THAT?

const book = lufthansa.book;
/*
DOES NOT WORK
book(23, 'Sarah Williams');
*/

//Using the 'call' method

book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings.bookings);

book.call(lufthansa, 239, 'Esumei Moses');


//Using the 'apply' method. Not really used anymore in modern JS
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);


//There is a new modern way
book.call(lufthansa, ...flightData);

