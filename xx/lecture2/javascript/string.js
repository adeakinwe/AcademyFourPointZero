let comment = "Olaoluwa isn't very good at Mathematics";

//string templates
let text = `Hello Academy 4.0 students` //back-tic syntax

let price = 150, quantity = 17;
let totalCost = `Total cost of my goods is ${price * quantity}`; //template literal 
console.log(totalCost);


//typeof
console.log(typeof(comment));
console.log(typeof(price));

//length
console.log(comment.length)

//escape
let esc = "Academy 4.0 students are doing \"great\"";
let escs = `Academy 4.0 students are doing \`great\``;
console.log(esc);
console.log(escs);

//String Methods
let states = "Ondo, Bauchi, Lagos, Kano";
let state = states.slice(0,4);
console.log(state);

console.log(states.slice(14,19));

console.log(states.substring(21,25));

let state2 = states.slice(-11); //negative indexing
console.log(state2);

//replace
let rep = 'I love Angular, Josphine loves Angular';
let replaced = rep.replace('Angular', 'React').replace('Angular', 'Vue');
console.log(replaced);

//toUpperCase and toLowerCase
let upper = "uppercase";
console.log(upper.toUpperCase());

let lower = "LOWERCASE";
console.log(lower.toLowerCase());

//concat
let j = 'Good', k = 'Morning', l = 'Nigeria';
let greeting = j.concat(' ', k, ' ', l);
console.log(greeting);

//trim
let str = " Good morning student ";
let str2 = str.trim();
console.log(str2);

//split
let split = "welcome to Angular class";
let splittedtoArray = split.split(" ");
console.log(splittedtoArray);

console.log(typeof(splittedtoArray));
let isThisAnArray = Array.isArray(splittedtoArray);
console.log(isThisAnArray);

//indexOf
console.log(str2.indexOf('i'));
console.log(str2.indexOf('i'));
console.log(str2.lastIndexOf('o'));

//boolean
let aa = 10;
let ab = 12;

console.log(aa == ab);
console.log(aa <= ab);
