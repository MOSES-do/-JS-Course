'use strict';

//A set is a collection of unique values.

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissotto', 'Pasta', 'Pizza']);
console.log(orderSet);

//1. A set is similar to an array, string as it has no key value pairs also and they are iterables.
//However, it is still very different from an array becos its elements are unique and becos the order of element in a set are irrelevant
//2 There are no indexes in set becos they are all unique.

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
console.log(orderSet.add('Garlic Bread'));
console.log(orderSet.add('Garlic Bread'));
console.log(orderSet.delete('Risotto'));
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);


//3 The main use case of sets is to remove duplicate values from an array

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//Convert set to array
const staffUnique = [...new Set(staff)];


