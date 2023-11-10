//Object Mutation
const person = {
    firstName: "John",
    lastName: "Doe",
    Age: 34,
    courses: ['JavaScript', 'Angular', 'CSS']
}

// const stranger = person;

// stranger.lastName = "Stanley";

// console.log("Stranger: ", stranger.lastName);
// console.log("Person: ", person.lastName);

const stranger = {
    firstName: "John",
    lastName: "Doe",
    Age: 34,
    courses: ['JavaScript', 'Angular', 'CSS']
}

stranger.lastName = "Mark";
console.log("Stranger: ", stranger.lastName);
console.log("Person: ", person.lastName);

//Convert Object to Array
let footballTeam = {
    clubName: "Manchester United",
    striker: "Rashford",
    players: ["Rashford","Bruno","Anthony"],
    trophies: ["ucl","epl","carling"]
}

console.log(Object.values(footballTeam));
console.log(Object.keys(footballTeam));


//Convert Object to String
const personString = JSON.stringify(person);

console.log(personString);