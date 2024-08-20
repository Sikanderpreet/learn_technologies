"use strict";
// Create two interfaces: Location with properties latitude and longitude, and Place with properties name and description. Create a function that accepts a parameter of type Location & Place and returns a formatted string with all the information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstFunction = void 0;
const firstFunction = (param) => {
    return `Latitude: ${param.latitude}, Longitude: ${param.longitude}, Name: ${param.name}, Description: ${param.description}`;
};
exports.firstFunction = firstFunction;
const examplePlace = {
    latitude: 30.9021, longitude: -118.22211,
    name: "kapurthala", description: "paris of punjab"
};
console.log((0, exports.firstFunction)(examplePlace));
function secondFunction(student) {
    const { name, age, grade, sport, team } = student;
    return `Name: ${name}, Age: ${age}, Grade: ${grade}, Sport: ${sport}, Team: ${team}`;
}
const student = {
    name: "Sikander",
    age: 28,
    grade: "A",
    sport: "Volley Ball",
    team: "Blue Team"
};
console.log(secondFunction(student));
function thirdFunction(item) {
    const creator = item.artist || item.host;
    return { title: item.title, creator };
}
const creator = {
    title: "Tum hi ho",
    artist: "Arijit",
    host: "Karan"
};
console.log(thirdFunction(creator));
function fouthFunction(job) {
    return `Job location is: ${job.city}, ${job.country}.`;
}
const job = {
    title: "Developer",
    salary: 30000,
    city: "Mohali",
    country: "India"
};
console.log(fouthFunction(job));
function fifthFunction(gadget) {
    return `Brand: ${gadget.brand}, Model: ${gadget.model}, Warranty duration: ${gadget.duration} and coverage: ${gadget.coverage}`;
}
const gadgetInfo = {
    brand: "LG",
    model: 2020,
    duration: "5 Years",
    coverage: "50 percentage",
};
console.log(fifthFunction(gadgetInfo));
