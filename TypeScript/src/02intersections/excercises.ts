// Create two interfaces: Location with properties latitude and longitude, and Place with properties name and description. Create a function that accepts a parameter of type Location & Place and returns a formatted string with all the information.

interface GeoLocation{
    latitude:number,
    longitude:number
 }
 interface Place {
    name:string,
    description:string
 }

 export const firstFunction = (param: GeoLocation & Place):string =>{
    return `Latitude: ${param.latitude}, Longitude: ${param.longitude}, Name: ${param.name}, Description: ${param.description}`;
 }
 const examplePlace: GeoLocation & Place = {
    latitude:30.9021,longitude:-118.22211,
    name:"kapurthala", description:"paris of punjab"
}

 console.log(firstFunction(examplePlace));
 
// Define an interface Student with properties name, age, and grade. Define another interface Athlete with properties sport and team. Create a function that takes an object of type Student & Athlete and returns a string describing the student-athlete..

interface Student { 
    name: string;
    age: number;
    grade: string;
}
interface Athlete {
    sport: string;
    team: string;
}

function secondFunction(student: Student & Athlete): string{
    const {name,age,grade,sport,team}= student;
    return `Name: ${name}, Age: ${age}, Grade: ${grade}, Sport: ${sport}, Team: ${team}`
}
const student: Student & Athlete ={
    name: "Sikander",
    age : 28,
    grade: "A",
    sport:  "Volley Ball",
    team: "Blue Team"
}
console.log(secondFunction(student));


// Create interfaces MusicTrack with properties title and artist, and Podcast with properties title and host. Create an object that includes properties from both interfaces and a function that returns the title and the creator (either artist or host).

interface MusicTrack { 
    title: string;
    artist: string
}
interface Podcast { 
    title: string;
    host: string;
}

function thirdFunction(item: MusicTrack & Podcast):{title:string, creator: string}{
    const creator = item.artist || item.host;
    return {title: item.title, creator};
}

const creator: MusicTrack & Podcast= {
    title: "Tum hi ho",
    artist: "Arijit",
    host: "Karan"
}

console.log(thirdFunction(creator));

// Define interfaces Job with properties title and salary, and Location with properties city and country. Create a function that accepts a parameter of type Job & Location and returns a string describing the job location.
interface Job{
    title:string;
    salary: number;
}

interface Location{
    city:string;
    country: string;
}
type JobLocation = Job & Location;

function fouthFunction(job: JobLocation):string{
    return `Job location is: ${job.city}, ${job.country}.`
}

const job: JobLocation={
    title:"Developer",
    salary: 30000,
    city: "Mohali",
    country:"India"
}

console.log(fouthFunction(job));

// Create interfaces Gadget with properties brand and model, and Warranty with properties duration and coverage. Write a function that takes an object of type Gadget & Warranty and returns a detailed description of the gadget and its warranty.



interface Gadget{
    brand: string;
    model: number;
}
interface Warranty{
    duration:string;
    coverage:string;
}
 function fifthFunction(gadget: Gadget & Warranty):string{
    return `Brand: ${gadget.brand}, Model: ${gadget.model}, Warranty duration: ${gadget.duration} and coverage: ${gadget.coverage}`
 }
const gadgetInfo : Gadget & Warranty ={ 
    brand: "LG",
    model: 2020,
    duration:"5 Years",
    coverage:"50 percentage",
}
console.log(fifthFunction(gadgetInfo));
