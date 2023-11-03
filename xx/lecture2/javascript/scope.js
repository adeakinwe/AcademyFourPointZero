var x = 5;

var x = 7;

var x = 10;


let y = 5;

//let y = 7;

function anotherScope(){
    let y = 10;
    const z = 6;
    return y;
}

console.log(anotherScope());
console.log(y);

const z = 6;

//const z = 9;