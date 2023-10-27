let func = (x) => { return x + 5}; //one parameter

let func2 = (x,y,z) => {return x * y * z}; //multiple parameter

let func3 = () => { return ("I'm empty")}; //no parameter

console.log(func3);

let num = [3, 6, 10, 11, 14, 15, 21]

let odd = [];

num.filter((n) => {
    if (n % 2 == 1) {
        odd.push(n);
    }
})

console.log(odd)

//func(4);
console.log(func(4));

//func2(3,5,8);
console.log(func2(3,5,8));

//func3()
console.log(func3());