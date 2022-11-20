'use strict';

//IIFE tricks JS to think an incomplete function is an expression

(function () {
    console.log('This will never run again')
})();

(() => console.log('This will never run again'))();