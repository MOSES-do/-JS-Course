const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

//String are primitives and as such are immutable results of their methods for further usage must be stored in a variable

//Slice - used to collect part of a string.

console.log(airline.slice(4));//Air Portugal
console.log(airline.slice(4, 7)); //Air

//API Examples
console.log(airline.slice(0, airline.indexOf(' ')));//returns the first white space separated value.

console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
    const test = seat.slice(-1);

    test === 'B' || test === 'E' ? console.log('You have selected a middle seat 😁') : console.log('You picked a rear seat😍');

}

checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('45EC');
checkMiddleSeat('45E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));


console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix name capitalization
const passenger = 'jONaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Compare email
const email = 'hello@jonas.io';
const loginEmail = '    Hello@Jonas.Io   \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//Shorthand for the above

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);


//Replace parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23'

console.log(announcement.replaceAll('door', 'gate'));


//String methods that return booleans
//1. Includes
//2. Starts with
//3. Ends with

const planes = 'Airbus A320neo';
console.log(planes.includes('A320'));
console.log(planes.includes('Boeing'));
console.log(planes.startsWith('Air'));

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
    console.log('...part of the new Airbus family');
}


//Practical exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log("You are not welcome on board");
    } else {
        console.log("Welcome aboard");
    }
}
checkBaggage("I have a knife in my bag pack");
checkBaggage("I have a gun in my bag pack");
checkBaggage("I have some food in my bag pack");


//Split method
//Creates an array using strings separated by a divider string();

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

//Split and destructuring
const [firstName, lastName] = 'Moses Esumei'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const passengers = 'jessica ann smith davis';

const upperCaseName = function (names) {
    const newNames = names.split(' ');
    const namesUpper = []

    for (n of newNames) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));

}
upperCaseName(passengers);


//Padding a string : Addig anumber of characters to a string until you reach desired length.

const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

//Masking with padding

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
}

console.log(maskCreditCard(3444585944));
console.log(maskCreditCard(22930394854839));



//Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInline = function (n) {
    console.log(`There are ${n} waiting in line ${'✈️'.repeat(n)}`)
}
planesInline(5);
planesInline(3);
planesInline(2);



