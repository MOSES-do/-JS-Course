'use strict';


const flight = 'LH234';
const jonas = {
    name: 'Esumei Moses',
    passport: "245758585AC"
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999',
        passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === '245758585AC') {
        alert("Check in")
    } else {
        alert("Wrong passport!");
    }
}

// checkIn(flight, jonas)
console.log(flight);
console.log(jonas);


//Two functions manipulating the same object, this can create a problem
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}
newPassport(jonas);
// checkIn(flight, jonas)
console.log(flight);
console.log(jonas);

// How passing arguments works: value vs reference

/*
    Javascript only supports passing arguments by value.
*/



