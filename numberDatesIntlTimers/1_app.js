'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-07-26T14:43:26.374Z',
        '2022-11-18T18:49:59.371Z',
        '2022-11-23T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};


const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const displayMovements = function (movements) {
//     //hide defualt dom template
//     containerMovements.innerHTML = '';
//     movements.forEach((mov, i) => {
//         const DepositType = mov > 0 ? 'deposit' : 'withdrawal';
//         const html = `
//              <div class="movements__row">
//                 <div class="movements__type movements__type--${DepositType}">${i + 1} ${DepositType}</div>
//                 <div class="movements__value">${mov}€</div>
//             </div>
//         `;
//         //Insert html back in the dom
//         containerMovements.insertAdjacentHTML('afterbegin', html)

//     });
// };
// displayMovements(account1.movements);

const formatMovementDate = (date) => {
    const calcDaysPassed = (date1, date2) =>
        Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);

    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    if (daysPassed === 0) return 'Today';
    else {
        const day = `${date.getDate()}`.padStart(2, 0);
        const month = `${date.getMonth() + 1}`.padStart(2, 0);
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }


}

//Adding the sort functionality
const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;



    movs.forEach((mov, i) => {
        const DepositType = mov > 0 ? 'deposit' : 'withdrawal';

        const date = new Date(acc.movementsDates[i]);

        const displayDate = formatMovementDate(date);

        //dates

        const html = `
             <div class="movements__row">
                <div class="movements__type movements__type--${DepositType}">${i + 1} ${DepositType}</div>
                <div class="movements__date">${displayDate}</div>
                <div class="movements__value">${mov.toFixed(2)}€</div>
            </div>
        `;
        //Insert html back in the dom
        containerMovements.insertAdjacentHTML('afterbegin', html)

    });
};

const calcDisplayBalance = (accs) => {
    accs.balance = accs.movements.reduce((accum, cur) => {
        return accum + cur;
    }, 0);
    labelBalance.textContent = `${accs.balance.toFixed(2)}£`;
}
// calcDisplayBalance(account1);

const calcDisplaySummary = function (accs) {
    const incomes = accs.sumIn = accs.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    console.log(accs.sumIn);
    labelSumIn.textContent = `${incomes.toFixed(2)}£`;

    //////////////
    const out = accs.sumOut = accs.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov);
    console.log(accs.sumOut);
    labelSumOut.textContent = `${Math.abs(out.toFixed(2))}£`;

    const interest = accs.movements.filter(mov => mov > 0).map(deposit => (deposit * accs.interestRate) / 100).filter(deposit => deposit >= 1).reduce((acc, mov) => acc + mov, 0);
    labelSumInterest.textContent = `${Math.abs(interest.toFixed(2))}£`;

}
// calcDisplaySummary(account1);


//forEach: Using forEach to modify an exisiting array/produce a side effect
const createUserNames = (accs) => (
    accs.forEach((acc) => {
        acc.username = acc.owner.toLowerCase().split(' ').map(n => n[0]).join('');
    })
)
createUserNames(accounts);




const updateUI = (acc) => {
    //Display movements
    displayMovements(acc);

    //Display balance 
    calcDisplayBalance(acc);


    //Display summary
    calcDisplaySummary(acc);
}

//Evengt handlers
let currentAccount;

//FAKE LOGIN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;


const cDate = () => {
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        //Display UI and elcome message
        containerApp.style.opacity = 1;
        labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`

        //Current date
        cDate();


        //Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';

        inputLoginPin.blur();

        //Update UI
        updateUI(currentAccount);




    } else {
        containerApp.style.opacity = 0;
        labelWelcome.textContent = `Wrong username/password`


    }
})

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();

    const transferTo = inputTransferTo.value;
    const transferAmount = +(inputTransferAmount.value);

    const recAccount = accounts.find(acc => acc.username === transferTo)
    const balance = currentAccount.balance; console.log(balance);

    inputTransferTo.value = inputTransferAmount.value = '';


    if (balance > 0 && transferAmount <= balance && recAccount && recAccount !== currentAccount) {
        //Doing the transfer logic
        console.log('Transfer valid');
        currentAccount.movements.push(-transferAmount);
        recAccount.movements.push(transferAmount);

        //Add transfer date
        currentAccount.movementsDates.push(new Date().toISOString());
        recAccount.movementsDates.push(new Date().toISOString());

        //Update UI
        updateUI(currentAccount);
    }
});


btnLoan.addEventListener('click', (e) => {
    e.preventDefault();

    const loan = Math.floor(inputLoanAmount.value);
    //Loan is only applicable if user has a deposit that is at least 10% of the loan amount
    if (loan > 0 && currentAccount?.movements.some(mov => mov >= (10 / 100 * loan))) {
        setTimeout(function () {

            console.log('Credible for a raise');
            currentAccount.movements.push(loan);

            //Add loan date
            currentAccount.movementsDates.push(new Date().toISOString());

            //Update UI
            updateUI(currentAccount);
        }, 2500);
    }

    inputLoanAmount.value = '';
})


btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    const closeUsername = inputCloseUsername.value;
    const closePin = Number(inputClosePin.value);
    // console.log(currentAccount)
    if (currentAccount.username === closeUsername && currentAccount.pin === closePin) {
        // console.log('Delete');
        //Using findIndex
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);

        //Delete account
        accounts.splice(index, 1);

        //Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';

})

let sorted = false;

btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount, !sorted);

    sorted = !sorted;
})