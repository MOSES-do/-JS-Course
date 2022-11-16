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

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, ...otherIngredients);
    }
};

//Introduced in ES 2020

const rest1 = {
    name: 'Capri',
    numGuests: 0,
}

const rest2 = {
    name: 'La Pizza',
    owner: 'Giovanni Rossi'
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//Same as above only   shorter and easier
//If object property exists or is false assign it the default value

//Logical nullish assignment operator
rest1.numGuests ??= 10;

//Logical assignment operator
rest2.numGuests ||= 10;

rest1.owner ||= '<anonymous>';//falsy 
rest2.owner &&= '<anonymous>';//truthy

console.log(rest1);
console.log(rest2);
