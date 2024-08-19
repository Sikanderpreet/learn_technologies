"use strict";
// Create a function that accepts a parameter of type string | number. If it's a string, return the length of the string. If it's a number, return the string representation of the number with a prefix "Number: ".
Object.defineProperty(exports, "__esModule", { value: true });
exports.fouthFunction = exports.thirdFunction = exports.secondFunction = exports.paramStringOrNumber = void 0;
const paramStringOrNumber = (param) => {
    if (typeof param === 'string')
        return param.length;
    return `Number: ${param}`;
};
exports.paramStringOrNumber = paramStringOrNumber;
const res = (0, exports.paramStringOrNumber)('sikanderpreet singh');
console.log(res);
// Write a function that takes a parameter of type boolean | string[]. If it's a boolean, return its negation. If it's an array of strings, return a single string concatenating all the elements.
const secondFunction = (param) => {
    if (typeof param === 'boolean')
        return !param;
    let string = param.join("");
    return string;
};
exports.secondFunction = secondFunction;
const arr = ['s', 'i', 'k', 'a', 'n', 'd', 'e', 'r'];
const boo = true;
console.log((0, exports.secondFunction)(arr));
console.log((0, exports.secondFunction)(boo));
// Define a function that accepts a parameter of type Date | string. If it's a Date, return the day of the week. If it's a string, assume it's a date string, convert it to a Date object, and then return the day of the week.
const thirdFunction = (param) => {
    if (param instanceof Date)
        return param.getDay();
    const newDate = new Date(param);
    return newDate.getDay();
};
exports.thirdFunction = thirdFunction;
console.log((0, exports.thirdFunction)(new Date()));
// Create a function that accepts a parameter of type number[] | { [key: string]: number }. If it's an array, return the sum of the elements. If it's an object, return the sum of the values.
const fouthFunction = (param) => {
    if (param instanceof Array) {
        console.log("instance of array/....");
        const sum = param.reduce((acc, curr) => acc + curr, 0);
        return sum;
    }
    return Object.values(param).reduce((acc, curr) => acc + curr, 0);
};
exports.fouthFunction = fouthFunction;
console.log((0, exports.fouthFunction)([2, 4, 5, 6]));
console.log((0, exports.fouthFunction)({ "a": 3, "b": 4 }));
// Write a function that accepts either a string or an object with a property text: string. If it's a string, return it in lowercase. If it's an object, return the text property in lowercase.
const fifthFunction = (param) => {
    if (typeof param === 'string')
        return param.toLowerCase();
    return param.text.toLowerCase();
};
console.log((fifthFunction("SIKANDERpReeT SiNGh")));
console.log(fifthFunction({ text: "SIKANDERPREET SINGH" }));
