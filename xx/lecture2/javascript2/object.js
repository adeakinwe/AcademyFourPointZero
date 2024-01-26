let person = {};

person = {
    firstName: "John",
    lastName: "Doe",
    age: 46,
    cars: ['volvo','benz','bmw','toyota'],
    isMarried: true
}

console.log('PERSON: ',person);

const student = {};
student.firstName = "Ifeoluwa";
student.age = 21;
student.course = "Medicine";
student.isMarried = false;

console.log('STUDENT: ',student);

//Accessing object

console.log(student.course);
console.log(student["course"]);

console.log(person.cars);

student.course = "Botany";
console.log('STUDENT: ',student);

person.cars.push('opel');
console.log(person.cars);

person.cars[5] = "ford";
console.log(person.cars);

//Nested Arrays and Objects
const myObj = {
    name: 'Bright',
    age: 20,
    cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
]
}


console.log(myObj.cars);
console.log(myObj.cars[0]);
console.log(myObj.cars[0].models[1]);

//WRITE A FOR LOOP THAT WILL OUTPUT ALL CARS MODELS IN myObj Object

console.log('-------------CARS---------------')
for(let i=0; i < myObj.cars.length; i++){
    for(let j=0; j < myObj.cars[i].models.length; j++){
        console.log(`${myObj.cars[i].name} - ${myObj.cars[i].models[j]}`)
    }
}

//Objects as mutable
const staff = {
    firstName: "Bright",
    lastName: "Charles",
    salary: 57000,
    Id: ['voter\'s card','nin','passport'],
    isMarried: true
}

const consultant = staff;

console.log('STAFF: ',staff);
console.log('CONSULTANT: ',consultant);

consultant.salary = 76000;
console.log('STAFF: ',staff);
console.log('CONSULTANT: ',consultant);

const expatriate = {
    firstName: "Bright",
    lastName: "Charles",
    salary: 57000,
    Id: ['voter\'s card','nin','passport'],
    isMarried: true
}

expatriate.salary = 32000;

console.log('STAFF: ',staff);
console.log('CONSULTANT: ',consultant);
console.log('EXPATRIATE: ',expatriate);