'use strict';

//A closure is not a feature explicity used, i.e. It is not created manually like we do objects and arrays. It simply happens in certain situation in our code. The goal is to be able to recognize these situations.

// A closure makes a function remember all its variable that existed at its birth place.

//A closure gives a function access to its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passenger`);
    }
}

const booking = secureBooking();
booking();
booking();
booking();

let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();
//Re-assigning fn=unctions;
h();
f();
console.dir(f);//to inspect closure 


//Example 2

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassengers(180, 3);