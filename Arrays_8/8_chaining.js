'use strict';


//A method can only be chained to another if the previoius returns an array
//Conversely, do not chain methods that change/mutate the original array such splice adn reverse
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

//PIPELINE
const totalDepositsUSD = movements.filter(mov => mov > 0)
    .map(mov => mov * eurToUSD)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);