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

//
const book = lufthansa.book;

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

//Bind Method
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)

bookEW(23, 'Steven Williams');
bookLH(23, 'Steven Williams');

//Presetting method parameters using 'bind' method

const bookEW23 = book.bind(eurowings, 23); //partial application  - means a part of the original argument already predefined
bookEW23('Jonas Schmedtmann');
bookEW23('Mary Cooper');


//Other examples - Objects with eventListeners

lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));



const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));


//Challenge. Rewrite code using functions returning functions
//arrow functions

const vat = function (rate) {
    return function (value) {
        console.log(`${value + value * rate}`);
    }
}

// const vat = rate => value => console.log(`${value + value * rate}`);

const tax = vat(0.23);
tax(100);








