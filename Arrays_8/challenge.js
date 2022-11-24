'use strict';


// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//MY SOLUTION
const calcAverageHumanAge = (ages) => {
    const humanAge = [];
    const expAges = ages.map((dogAge) => {
        dogAge <= 2 ? humanAge.push(2 * dogAge) : humanAge.push(16 + dogAge * 4);
    });
    const adultDogs = humanAge.filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    console.log(adultDogs);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


//Even Better chaining 
const calcAverageHumanAgeNew = (ages) => {
    const humanAge = ages.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
    console.log(humanAge);
};

calcAverageHumanAgeNew([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAgeNew([16, 6, 10, 5, 6, 1, 4]);



//JONAS' SOLUTION
const calcAverageHumanAge1 = function (ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);

    // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

    const average = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length,
        0
    );

    // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

    return average;
};
const avg1 = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);