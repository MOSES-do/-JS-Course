'use strict';

//Looping objects: Object keys, values and entries

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];


const openingHours = {
    [weekdays[3]]: {
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
};


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 enhanced object literal
    openingHours,

    //Pre ES6 for methods
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, ...otherIngredients);
    },

    //ES6 for methods
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

//Looping Object keys - Objects is not an iterable that's why we attach the entries to enable us iterate it
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
    openStr += `${day},`;
}
console.log(openStr);

//Looping object values
const values = Object.values(openingHours);
console.log(values);

//keys and values and 
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
