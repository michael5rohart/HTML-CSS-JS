"use strict";

const namePerson1 = "yannick";
let person1MyWeight = 64;
let person1MyHeight = 1.90;

const namePerson2 = "Michael";
let person2MyWeight = 92;
let person2MyHeight = 1.84;

let person1MyBmi= person1MyWeight / (person1MyHeight ** 2);
let person2MyBmi= person2MyWeight / (person2MyHeight ** 2);
person1MyBmi = person1MyBmi.toFixed(2);
person2MyBmi = person2MyBmi.toFixed(2);
console.log(`michael BMI is ${person1MyBmi}`);
console.log(`yannick BMI is ${person2MyBmi}`);


