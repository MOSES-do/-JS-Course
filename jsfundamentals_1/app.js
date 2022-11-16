// 
const ageJonas = 2037 - 1991;

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
//Solution
console.log('===CHALLENGE 1===')

function calcBMI(mass, height) {
    return mass / height ** 2;
}

const markBMI = calcBMI(78, 1.69);
markBMI2 = calcBMI(95, 1.88);
const johnBMI = calcBMI(92, 1.95);
johnBMI2 = calcBMI(85, 1.76);
console.log(markBMI, johnBMI);
console.log(markBMI2, johnBMI2);
console.log(markBMI > johnBMI);
console.log(markBMI2 > johnBMI2);


//Challenge 2
console.log('===CHALLENGE 2===')
if (markBMI > johnBMI) {
    console.log(`Mark's BMI which is (${markBMI}) is higher than John's`)
} else {
    console.log(`John's BMI which is (${johnBMI}) is higher than Mark's`)
}

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI which is (${markBMI}) is higher than John's`)
} else {
    console.log(`John's BMI which is (${johnBMI}) is higher than Mark's`)
}

console.log('===CHALLENGE 3===')
// Test data
const teamDolphin = [96, 108, 89];
const teamKoala = [88, 91, 110];

const testData1a = [109, 9895, 19823];
const testData1b = [109, 9895, 19823];

const testData2a = [10, 20, 30];
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
    if (averScore(teamDolphin) >= 100 && averScore(teamDolphin) > averScore(teamKoala)) {
        console.log(`Team dolphin's average score is  ${averScore(teamDolphin)} and they win by ${averScore(teamDolphin) - averScore(teamKoala)}😁🏆`)
    } else if (averScore(teamKoala) >= 100 && averScore(teamKoala) > averScore(teamDolphin)) {
        console.log(`Team koala's average score is  ${averScore(teamKoala)} and they win by ${averScore(teamKoala) - averScore(teamDolphin)}😁🏆`)
    } else if ((averScore(teamDolphin) >= 100) && (averScore(teamKoala) >= 100) && averScore(teamDolphin) === averScore(teamKoala)) {
        console.log(`There was a tie: teamDolphin ${averScore(teamDolphin)} and teamKoala ${averScore(teamKoala)} but they exceed the minimum score.😉`);
    } else if ((averScore(teamDolphin) < 100) && (averScore(teamKoala) < 100) && averScore(teamDolphin) === averScore(teamKoala)) {
        console.log(`There was a tie: teamDolphin ${averScore(teamDolphin)} and teamKoala ${averScore(teamKoala)} and they score below the minimum score. There is no winner😒`);
    } else if ((averScore(teamDolphin) < 100) && (averScore(teamKoala) < 100) && averScore(teamDolphin) !== averScore(teamKoala)) {
        console.log(`There was no winner: teamDolphin ${averScore(teamDolphin)} and teamKoala ${averScore(teamKoala)} are both less than the minimum score of 100😒`);
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

console.log('===CHALLENGE 3 END===');

//Template Literals

// const firstName = 'Moses';
// const job = 'programmer';
// const birthYear = 1994;
// const year = 2022;

// const moses = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(moses);


//Taking decisions: If and else statements

let age = 18;
let isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start her dirver\'s licensing process');
}

age = 12;
isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start her dirver\'s licensing process');
} else {
    console.log('She is not up to the required age');
}


//Example 2
const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


//Type conversion and coercion

console.log('===Type conversion and coercion===')

//Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear), + 18);

console.log(Number('Jonas')) //output: NaN //More like this means invalid number
console.log(typeof NaN); //output: number

console.log(String(23)); //output 23 as a string in color white


//Type coercion
console.log('I am' + 28 + 'years old');
console.log('23' - '10' - 3);
console.log('23' - '10' + '3');
console.log('23' * '10' + '9');


// Truthy and Falsy
console.log('===Truthy and Falsy===')

console.log(Boolean(0)); //output: false
console.log(Boolean(undefined));//output: false
console.log(Boolean('Jonas'));  //output: true
console.log(Boolean({})); //empty object  //output: true


console.log('===0===')
const money = 0;

if (money) {
    console.log('Don\'t spend it all');
} else {
    console.log("You should get a job");
}

console.log('===undefined===')

let height;

if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED'); //output: Height is UNDEFINED
}

console.log('===empty string("")===')
let name = '';

if (name) {//
    console.log('I have a name');
} else {
    console.log('No name found');
}

console.log('===NAN===')
let result = 2 / 'boy';

if (result) {
    console.log('Oboy eeeee!')
} else {
    console.log('He no work ooo');
}


console.log(2 === '2');


// const favourite = Number(prompt("What's your favorite number?"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number');
// }

// Boolean Logic
console.log('==Boolean Logic==');
const hasDriversLicense = true;
const hasGoodVision = false;

const canDrive = hasDriversLicense && hasGoodVision;

if (canDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...')
}


//Switch Statements
console.log('===Switch Statements===')
const day = 'monday';

switch (day) {
    case 'monday': //day === monday | strict equality
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;

    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');


}