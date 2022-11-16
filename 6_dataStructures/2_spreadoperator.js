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


    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your order of pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};



const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//Using the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

/**
 * The spread operator creates a new array, so it is useful for mutating objects
 * */
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log(...newMenu);
console.log(restaurant);



//Use cases for spread operator
/** 
 * 1. Copy array
 * 2. 
 * **/

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//Iterables are things like arrays, strings, maps or set and the spread operator works on all of them except objects. Also spread operator cannot be used in template literals.

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

//PASS MULTIPLE VALUES INTO A FUNCTION
// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?')
// ]

// restaurant.orderPasta(...ingredients);

//Since ES 2018 - Spread operator now works on objects even though objects are not iterables.

const newRestaurant = { ...restaurant, foundedIn: 1998, founder: 'Guiseppe' }
console.log(newRestaurant);

//Shallow copy of objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name, restaurant.name);

