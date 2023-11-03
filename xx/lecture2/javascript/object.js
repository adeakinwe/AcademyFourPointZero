const person = {
    firstName: "John",
    lastName: "Doe",
    Age: 34,
    courses: ['JavaScript', 'Angular', 'CSS']
}

//empty objects and assignment
const student = {};

student.firstName = "Mark";
student.lastName = "Bright";
student.courses = ['HTML', 'Python','React'];


console.log(student);
console.log(student.courses[1]);
console.log(person.courses[2]); //indexing an array starts from 0
console.log(person["lastName"]);

//assigning new object properties
student.firstName = "James";
student["lastName"] = "Richard";

console.log(student.firstName);
console.log(student.lastName);

//nestedObjects

const myObject = {
    name: "Michael Jackson",
    country: "USA",
    albums: {
        album1: "jackson1",
        album2: "jackson2",
        album3: "jackson3"
    }
}

console.log(myObject.country);
console.log(myObject.albums.album2);
console.log(myObject.albums["album3"]);

//nested Arrays and Object
const employee = {
    name: "Bright",
    age: 20,
    cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
    ]
}

console.log(employee.cars[2].models[1]);

console.log(employee.cars[0].models[1])

//looping through nested objects

for (var item in employee.cars[0].models){
    console.log(employee.cars[0].models[item])
}

for (let i=0; i < employee.cars[0].models.length; i++){
    console.log(employee.cars[0].models[i])
}

//loop through employee and output all cars and their models

// come up with a student object that has name, age, levels. levels with an array of object level, courses and CGPA