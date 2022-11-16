'use strict';
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM(see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA(pasted to textarea)
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

//My solution


const submit = document.querySelector(".submit");

const camelCaseConverter = function () {

    const input = document.querySelector("#mssg").value;
    // console.log(input);

    const arrInput = input.trim().toLowerCase().split('\n');
    // console.log(arrInput);
    for (const [i, arr] of arrInput.entries()) {

        const newArray = arr.trim().split("_");
        // console.log(newArray);
        const arrInputUpperCase = newArray[1].replace(newArray[1][0], newArray[1][0].toUpperCase());
        const outputValue = (`${newArray[0]}${arrInputUpperCase}`);

        console.log(`${outputValue.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);
    }
}
submit.addEventListener('click', camelCaseConverter);


// first_name
// Some_Variable
// calculate_AGE
// delayed_departure


//MY TEACHER'S SOLUTION(JONAS)

/*

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});
*/