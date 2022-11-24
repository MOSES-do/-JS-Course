'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

//Adding the sort functionality
const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach((mov, i) => {
        const DepositType = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
             <div class="movements__row">
                <div class="movements__type movements__type--${DepositType}">${i + 1} ${DepositType}</div>
                <div class="movements__value">${mov}€</div>
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
    labelBalance.textContent = `${accs.balance}£`;
}
// calcDisplayBalance(account1);

const calcDisplaySummary = function (accs) {
    const incomes = accs.sumIn = accs.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    console.log(accs.sumIn);
    labelSumIn.textContent = `${incomes}£`;

    //////////////
    const out = accs.sumOut = accs.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov);
    console.log(accs.sumOut);
    labelSumOut.textContent = `${Math.abs(out)}£`;

    const interest = accs.movements.filter(mov => mov > 0).map(deposit => (deposit * accs.interestRate) / 100).filter(deposit => deposit >= 1).reduce((acc, mov) => acc + mov, 0);
    labelSumInterest.textContent = `${Math.abs(interest)}£`;

}
// calcDisplaySummary(account1);


//Map
// const userNames = accounts.map(acc => acc.owner.split(' ').map(n => n[0]).join('')); console.log(userNames);
// const userName = ((acc) => {
//     const name = acc.owner.toLowerCase().split(' ').map(n => n[0]).join('');
//     // console.log(name);
// })
// // userName(account1);

//forEach: Using forEach to modify an exisiting array/produce a side effect
const createUserNames = (accs) => (
    accs.forEach((acc) => {
        acc.username = acc.owner.toLowerCase().split(' ').map(n => n[0]).join('');
        ///////////////////////////
        //unnecessary
        // const users = [];
        // for (const n of names) {
        //     console.log(n);
        //     users.push(n.slice(0, 1));
        //     // users.push(n[0]);
        // }
        // console.log(users.join(''));
    })
)
createUserNames(accounts);




const updateUI = (acc) => {
    //Display movements
    displayMovements(acc.movements);

    //Display balance 
    calcDisplayBalance(acc);


    //Display summary
    calcDisplaySummary(acc);

}

let currentAccount;

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        //Display UI and elcome message
        containerApp.style.opacity = 1;
        labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`

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
    const transferAmount = Number(inputTransferAmount.value);

    const recAccount = accounts.find(acc => acc.username === transferTo)
    const balance = currentAccount.balance; console.log(balance);

    inputTransferTo.value = inputTransferAmount.value = '';


    if (balance > 0 && transferAmount <= balance && recAccount && recAccount !== currentAccount) {
        //Doing the transfer logic
        console.log('Transfer valid');
        currentAccount.movements.push(-transferAmount);
        recAccount.movements.push(transferAmount);

        //Update UI
        updateUI(currentAccount);
    }
});


btnLoan.addEventListener('click', (e) => {
    e.preventDefault();

    const loan = Number(inputLoanAmount.value);
    //Loan is only applicable if user has a deposit that is at least 10% of the loan amount
    if (loan > 0 && currentAccount?.movements.some(mov => mov >= (10 / 100 * loan))) {
        console.log('Credible for a raise');
        currentAccount.movements.push(loan);

        //Update UI
        updateUI(currentAccount);
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
    displayMovements(currentAccount.movements, !sorted);

    sorted = !sorted;
})