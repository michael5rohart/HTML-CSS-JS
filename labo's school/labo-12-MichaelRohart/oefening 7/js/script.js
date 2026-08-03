"use strict";

let startAmount = 1000;
let interest = 0.02;
let years = 1;
let endAmount = startAmount * ( 1 + interest)**years
console.log(`amount in ${years} will be ${endAmount}`)