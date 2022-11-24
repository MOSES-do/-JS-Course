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

//DESTRUCTURING using rest 
//Rest uses the exact same syntax as the spread operator, however, to collect multiple elements and condenses them into an array.

//SPREAD, becaause on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST , becuase on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);




//OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);



//DESTRUCTURING within function parameters using rest

const add = function (...numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) sum += numbers[i];

    console.log(sum);

}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);


restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');