// Create a function that accepts a parameter of type string | number. If it's a string, return the length of the string. If it's a number, return the string representation of the number with a prefix "Number: ".

export const paramStringOrNumber = (param: string|number):string|number=>{
    if(typeof param === 'string') return param.length;
    return `Number: ${param}`;
}

const res = paramStringOrNumber('sikanderpreet singh');
console.log(res);

// Write a function that takes a parameter of type boolean | string[]. If it's a boolean, return its negation. If it's an array of strings, return a single string concatenating all the elements.

export const secondFunction = (param: boolean|string[]): boolean|string =>{
    if(typeof param === 'boolean') return !param;
    let string = param.join("")
    return string;
}
const arr = ['s','i','k','a','n','d','e','r'];
const boo = true;
console.log(secondFunction(arr));
console.log(secondFunction(boo));


// Define a function that accepts a parameter of type Date | string. If it's a Date, return the day of the week. If it's a string, assume it's a date string, convert it to a Date object, and then return the day of the week.


export const thirdFunction = (param: Date | string):number=>{
    if(param instanceof Date) return param.getDay();
    const newDate = new Date(param);
    return newDate.getDay();
}
console.log(thirdFunction(new Date()));

// Create a function that accepts a parameter of type number[] | { [key: string]: number }. If it's an array, return the sum of the elements. If it's an object, return the sum of the values.

export const fouthFunction = (param : number[] | {[key:string]: number}):number =>{
    if(param instanceof Array){
        console.log("instance of array/....");
        
        const sum = param.reduce((acc,curr) => acc + curr, 0);
        return sum;
    }
    return Object.values(param).reduce((acc, curr)=> acc+curr, 0);
}

console.log(fouthFunction([2,4,5,6]))
console.log(fouthFunction({"a":3,"b":4}))

// Write a function that accepts either a string or an object with a property text: string. If it's a string, return it in lowercase. If it's an object, return the text property in lowercase.

const fifthFunction = (param: string | {text:string}):string =>{
    if (typeof param === 'string') return param.toLowerCase();
    return param.text.toLowerCase();
}

console.log((fifthFunction("SIKANDERpReeT SiNGh")));
console.log(fifthFunction({text:"SIKANDERPREET SINGH"}));
