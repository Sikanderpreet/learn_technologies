"use strict";
// Create a function that takes a parameter of type string | number[] | { length: number }. Use type guards to return the length of the string, the length of the array, or the length property from the object.
const firstFunction = (param) => {
    if (typeof param === 'string')
        return param.length;
    if (param instanceof Array)
        return param.length;
    return param.length;
};
console.log(firstFunction('sikander'));
console.log(firstFunction([2, 3, 4, 5, 6]));
console.log(firstFunction({ length: 54 }));

