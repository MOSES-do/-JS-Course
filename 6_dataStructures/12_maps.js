'use strict';


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


//Data is stored in key value pairs in maps, the diff btw maps and objects is this, in maps the kieys can have a value type but in objects the keys are always strings.

//Methods
//1. Set
//2. Get
//3. Has

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest.set('categories', ['Italian', 'Pizzeria', 'Vegertarian']).set('open', 11).set('close', 23).set(true, 'We are open :)').set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
console.log(rest.size);
// rest.clear()

//Using arrays or objects as map keys
const arr = [1, 2];
rest.set(arr, 'Test');

console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);


const question = new Map([
    ['question', 'What is best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again']
])
console.log(question);

//convert object to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


//Maps iteration
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const answer = Number(prompt('Your answer', question.get('question')));

console.log(question.get(answer === question.get('correct')));

//Convert maps to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
