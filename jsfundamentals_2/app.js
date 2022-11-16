'use strict';

// FUNCTIONS
/**Function declaration VS expressions */

//-Function declaration

function calcAge1(birthYear) {
    return 2027 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);


//-Function Expression/Anonymous

const calcAge2 = function (birthYear) {
    return 2027 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

//-Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (firstName, birthYear) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;

//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// const yearsTillRetirement = yearsUntilRetirement('Moses', 1994);
// console.log(yearsTillRetirement);
// const yearsTillRetirement1 = yearsUntilRetirement('Bob', 1998);
// console.log(yearsTillRetirement1);


// Function calling other function
console.log('===function callimg other functions===');

const cutPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcesssor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;

    return juice;
}

console.log(fruitProcesssor(2, 3));

// Review of functions

const calcAge3 = function (year) {
    return 2022 - year;
}


const yearsUntilRetirement = (firstName, birthYear) => {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years. Retirement year is ${retirement + 2022}`;
    } else {
        return -1;
    }

}
console.log(yearsUntilRetirement('Moses', 1994));
console.log(yearsUntilRetirement('Bob', 1998));



console.log('===CHALLENGE 1===')
// Test data
const teamDolphin = [9936, 13308, 89844];
const teamKoala = [88, 91, 110];

const testData1a = [109, 9895, 19823];
const testData1b = [109, 9895, 19823];

const testData2a = [100, 10, 10];
const testData2b = [10, 20, 30];

const testData3a = [100, 200, 100];
const testData3b = [100, 200, 300];

const testData4a = [300, 400, 100];
const testData4b = [100, 200, 300];

console.log(`1. Calculate the average score for each team using the test data ${teamDolphin} and ${teamKoala}`);
console.log(`2. Compare the team's average score to determine the winner of the competition. Don't forget that there can be a draw
3. Include a requirement for a minimum score of 100
`);

function averScore(arr = []) {
    const sum = arr.reduce((accumulator, value) => {
        return accumulator + value / arr.length;
    }, 0);

    return sum;
}

function compareAverage(teamDolphin, teamKoala) {
    if (averScore(teamDolphin) >= averScore(teamKoala) * 2) {
        console.log(`Team dolphin's average score is  ${averScore(teamDolphin)}. and they win by ${averScore(teamDolphin)} vs ${averScore(teamKoala)}😁🏆`)
    } else if (averScore(teamKoala) >= averScore(teamDolphin) * 2) {
        console.log(`Team koala's average score is  ${averScore(teamKoala)} and they win by ${averScore(teamKoala)} vs ${averScore(teamDolphin)}😁🏆`)
    } else {
        console.log('No team has double the score of the other team');
    }
}
console.log('===TEST 1===')
compareAverage(teamDolphin, teamKoala)
console.log('===TEST 2===')
compareAverage(testData1a, testData1b)
console.log('===TEST 3===')
compareAverage(testData2a, testData2b)
console.log('===TEST 4===')
compareAverage(testData3a, testData3b)
console.log('===TEST 5===')
compareAverage(testData4a, testData4b)

console.log('===CHALLENGE 1 END===');


console.log('===ARRAYS===');

// ARRAYS



//Intro to Objects
// Dot VS BRACKET NOTATION
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemdtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
};

console.log(jonas['lastName']);

const findOut = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

//if (findOut === 'firstName') console.log(jonas.job);
console.log(jonas[findOut]);//This 

if (jonas[findOut]) {
    console.log(jonas[findOut])
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}


console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends, and his best friend is called ${jonas.friends[0]}`);

*/

// Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemdtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // better
    calcAge: function () {
        // console.log(this);
        return 2037 - this.birthYear;
    },

    //even better
    calcAge1: function () {
        this.age = 2037 - this.birthYear;
        console.log(this);

        return this.age;
    },

    objectSummary: function () {
        this.summary = `My name is ${this.firstName}, ${this.lastName}, born ${this.birthYear}, age ${this.age}, now work as a ${this.job} currently have ${this.friends.length} and i have ${this.hasDriversLicense ? 'a' : 'no'} driver\'s license`;

        return this.summary;
    }

};

// "this" keyword in objects

console.log(jonas.calcAge(jonas['birthYear']));
console.log('==returning the calculated value of the function method====')
console.log(jonas.calcAge());
console.log(`==return the value of the method as a new function (even better) ====
The object is mutable and using the method/function expression we have created a new property "age"`)
jonas.calcAge1();
console.log(jonas.age);
jonas.objectSummary();
console.log(jonas.summary);



// LOOPS


for (let x = 0; x <= 10; x++) {
    console.log(`Lifting weights ${x}`);
}


// Looping arrays, breaks and continue

const moses = [
    'Moses', 'Esumei', 2022 - 1991, 'Software Engineer', ['Michael', 'Peter', 'Steven'],
    true
]

const types = [];

for (let i = 0; i < moses.length; i++) {
    console.log(moses[i], typeof moses[i]);

    // create a new array from exisiting object / filling types array
    types[i] = typeof moses[i];
    //add a new element
    types.push('hey');
}

console.log(types);
//////////////////////////////////////
const years = [1991, 2007, 1969, 2020];

let sumYears = 0;

for (let a = 0; a < years.length; a++) {
    sumYears += years[a];
}
console.log(sumYears);

/////////////////////////////////////////

const newYears = [1991, 2007, 1969, 2020];
const ages = [];

for (let b = 0; b < newYears.length; b++) {
    // ages.push(2037 - newYears[b]);
    //or
    ages[b] = 2037 - newYears[b];
}
console.log(ages);


const myClass = [
    'Moses',
    'Esumei',
    2022 - 1991,
    'Software Engineer',
    ['Michael', 'Peter', 'Steven'],
    true
]

console.log('---ONLY STRINGS WITH "continue statement"---')

for (let i = 0; i < myClass.length; i++) {

    if (typeof myClass[i] !== 'string') continue;

    console.log(myClass[i], typeof myClass[i]);
}

console.log('---ONLY STRINGS WITH "break statement"---')

for (let i = 0; i < myClass.length; i++) {

    if (typeof myClass[i] === 'number') break;

    console.log(myClass[i], typeof myClass[i]);
}


// Looping backwards and loop in loops

const newClass = [
    'Moses',
    'Esumei',
    2022 - 1991,
    'Software Engineer',
    ['Michael', 'Peter', 'Steven'],
    true
]
//breakdown
/*
let i = newClass.length-1; means i is the last index of the array
i >= 0; means as long as upon every iteration i(last index) is greater than 0 keep counting.
i--; means as long as "statement two is correct" keep subtracting -1 from the last index until it is less than zero then stop the iteration.
*/

for (let i = newClass.length - 1; i >= 0; i--) {
    console.log(i, newClass[i]);
}


// Loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}🏋️`)
    }
}


// while loop
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log(`Loop is about to end ${dice}`)
}



//Debugging
console.log('===Debugging===')
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degree celsius'))
    }

    // console.log(typeof measurement.value);
    // console.table(measurement);
    // console.warn( measurement);
    // console.warn( measurement);
    console.log(measurement);
    const kelvin = (measurement.value) + 273;
    return kelvin;
}

// console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2); //join two arrays togther
    console.log(typeof temps);

    let max = temps[0];
    let min = temps[0];


    for (let i = 0; i <= temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== 'number') continue; //ignore exception and continue

        console.log(typeof curTemp);

        // debugger;
        if (curTemp > max) max = curTemp
        if (curTemp < min) min = curTemp
    }
    console.log(max, min);
    return max - min;
}

console.log(calcTempAmplitudeBug([4, 'a', 3], [2, 9, 5]));



//CHALLENGE 1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Create a function 'printForecast' which takes in an array 'arr' 
*/
console.log('===CHALLENGE 1 PROBLEM SOLVING===')

function printForecast(tempArr = []) {
    let str = '';     //Add multiple string to a biggetr string

    for (let i = 0; i <= tempArr.length; i++) {
        const dailyTemp = tempArr[i];
        if (typeof dailyTemp !== 'number') continue;
        // console.log(typeof dailyTemp);
        str += `${dailyTemp}℃ in ${i + 1} days ...`;
    }
    console.log('... ' + str);

}

printForecast([17, 'a', 21, 23, 25, 28]);
console.log('===test data 2===');
printForecast([12, 5, -5, 0, 4]);



function gradingStudents(grades) {
    // Write your code here


}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}