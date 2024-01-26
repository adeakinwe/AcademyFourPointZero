let scores = [55, 48, 79, 65, 88];

for(let i=0; i < scores.length; i++){
    console.log(scores[i]);
}

console.log('-------------------------------')

for(let x=0; x < scores.length; x++){
    let boostedScore = scores[x] + 7;
    console.log(boostedScore);
}

//write a for loop that will push items in 'num' array that are greater than 4 into a new array

let num = [5, 7, 3, 4, 1, 8];
console.log(num[3]);

let numGreaterThan4 = [];
let numLessThan4 = [];

for(let x=0; x < num.length; x+=1){
    if(num[x] > 4){
        numGreaterThan4.push(num[x]);
    }
    //console.log(numGreaterThan4);
}

console.log(numGreaterThan4)

for(let x=0; x < num.length; x+=1){
    if(num[x] < 4){
        numLessThan4.push(num[x]);
    }
}

console.log(numLessThan4);

let lang = ["Java","Python","JavaScript","React"]
//write a for loop that will capitalize lang array