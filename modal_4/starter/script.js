'use strict';

const openCards = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

function unhideCards() {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}

//using a for loop
for (let i = 0; i < openCards.length; i++) {
    openCards[i].addEventListener('click', unhideCards);
}

//using a forEach
// openCards.forEach(card => card.addEventListener('click', unhideCards));

function closeModalBox() {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}
closeModal.addEventListener('click', closeModalBox);


//Handling an "Esc" Keypress event
document.addEventListener('keydown', (e) => {
    // console.log('A key was pressed');
    // console.log(e);
    // console.log(e.key);

    if (e.key === "Escape" && !overlay.classList.contains('hidden')) {
        closeModalBox();
    }
})



