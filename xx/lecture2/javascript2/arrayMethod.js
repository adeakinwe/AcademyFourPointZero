//convert array to string
let fruits = ['Mango', 'Pawpaw', 'Orange', 'Pear'];
let fruitsString = fruits.join(',');
console.log(fruits);
console.log(fruitsString);

//pop and push
console.log(fruits.pop());
console.log(fruits);

fruits.push('Banana', 'Cucumber', 'Cherry');
console.log(fruits);

//shift and unshift
console.log(fruits.shift());
console.log(fruits);

fruits.unshift('Apple', 'Pineapple');
console.log(fruits);

//splice
fruits.splice(1,1);
console.log(fruits);

//splice(m,n)
fruits.splice(1,3); //remove n elements from m-index
console.log(fruits);

fruits.splice(0,0,'Tangerine','Lemon');
console.log(fruits);

fruits.splice(1,0,'Avocado','Tomato','Carrot');
console.log(fruits);

fruits.splice(3,2,'Cashew','Grape');
console.log(fruits);

//slice
let cars = [];
cars.push('Porsche','BMW','Toyota','Benz','Rolls Royce');

console.log(cars.slice(2));
console.log(cars)

console.log(cars.slice(2,4));
console.log(cars.slice(2,5));

console.log(cars);
let slicedCars = cars.slice(2,5);
console.log(slicedCars);
