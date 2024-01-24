if(true){
    console.log('I\'m a universally truthful');
}

let value = 10;

if(value >= 10){
    console.log("I'm greater than or equal to 10");
}
else{
    console.log("I'm less than 10");
}


let temp = 57;

if(temp < 15){
    console.log("It's a cold day!");
}
else if(temp > 15 && temp < 35){
    console.log("It's a warm day!");
}
else if(temp > 35 && temp < 45){
    console.log("It's a hot day")
}
else{
    console.log("It's a very hot day!");
}


let numbers = [2,4,8,16];
let includedNumber = numbers.includes(8);

console.log(typeof(includedNumber));
console.log(includedNumber);

if(includedNumber){
    console.log("I'm Included");
}
else{
    console.log("I'm not Included");
}