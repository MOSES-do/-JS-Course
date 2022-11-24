'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },


    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

//Destructuring is an ES6 feature and is a a way of unpacking values from an array or an object into separate variables.


//DESTRUCTURING ARRAY
const arr = [2, 3, 4];
//Pre ES6
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Using ES6
const [x, y, z] = arr;
console.log(x, y, z);

//When an array is destructured it doesn't loose its original state, it simply creates new variables from the original.

//Destructuring the restaurant array

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Pre Es6 to switch values between variables/indexes
console.log('Pre Es6 to switch values between indexes');
// const temp = main; //Italian
// main = secondary;  //Vegetarian
// secondary = temp; //Italian
// console.log(main, secondary);

//Using destructuring
console.log('Using destructuring');

//Mutating variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive two return value from a function
const [starter, mainCourse] = restaurant.order(1, 1);
console.log(starter, mainCourse);


//Nested destructuring
const nested = [2, 4, [5, 6]];

// let [arrInd0, , arrInd2] = nested;
// console.log(arrInd0, arrInd2);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values - This instance is used when destructuring arrays whose length we are not sure of. A good example is data from an A.P.I;

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);



//DESTRUCUTING OBJECTS - {} to destructure objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Change object property names
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);


//Mutating variables
let f = 111;
let g = 999;
const obj = { f: 23, g: 7, h: 14 };
({ f, g } = obj);
console.log(f, g);

//Nested objects
const { fri: { open: o, close: d } } = openingHours;
console.log(o, d);


restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del sole 23',
    mainIndex: 2,
    starterIndex: 2,
})

restaurant.orderDelivery({
    address: 'Via del sole 23',
    starterIndex: 1,
})