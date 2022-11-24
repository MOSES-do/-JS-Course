'use strict';

//NEW FEATURE OF OBJECTS AND ARRAYS'use strict';

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

//Introduced in ES2020
//Optional chaining checks if the property exists using "?", if it does not exist, 
//further lines of the code will not be parsed.

console.log(restaurant.openingHours.mon?.open);

for (const day of weekdays) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}



//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');


//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

//If ES2020 wasn't available
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');