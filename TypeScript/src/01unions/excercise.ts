// Create a function that accepts a parameter of type string | number. If it's a string, return the length of the string. If it's a number, return the string representation of the number with a prefix "Number: ".

const paramStringOrNumber = (param: string|number):string|number=>{
    if(typeof param === 'string') return param.length;
    return `Number: ${param}`;
}

const res = paramStringOrNumber('sikanderpreet singh');
console.log(res);

// Write a function that takes a parameter of type boolean | string[]. If it's a boolean, return its negation. If it's an array of strings, return a single string concatenating all the elements.

const secondFunction = (param: boolean|string[]): boolean|string =>{
    if(typeof param === 'boolean') return !param;
    let string = param.join("")
    return string;
}
const arr = ['s','i','k','a','n','d','e','r'];
const boo = true;
console.log(secondFunction(arr));
console.log(secondFunction(boo));


// Define a function that accepts a parameter of type Date | string. If it's a Date, return the day of the week. If it's a string, assume it's a date string, convert it to a Date object, and then return the day of the week.


const thirdFunction = (param: Date | string):number=>{
    if(param instanceof Date) return param.getDay();
    const newDate = new Date(param);
    return newDate.getDay();
}
console.log(thirdFunction(new Date()));




















module.exports = {
    paramStringOrNumber
}
