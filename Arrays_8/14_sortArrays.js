'use strict';


//Sort mutates the original array

const owners = ['Jonas', 'Zurich', 'Mary'];
console.log(owners.sort());


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//return < 0, a, b //Keep order
//return > 0, b, a //Switch order

/*
//Ascending
movements.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
})

//Desceni=ding
movements.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
})
*/

//Even better
movements.sort((a, b) => a - b);
console.log(movements);


movements.sort((a, b) => b - a);
console.log(movements);