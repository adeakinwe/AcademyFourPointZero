//sort()
let digits = [4,7,9,1,5,0,8];
let sortedDigits = digits.sort();
console.log(sortedDigits);

let reversedDigits = digits.reverse();
console.log(reversedDigits);

let cities = ['abuja', 'lagos', 'kano', 'Abuja', 'Kano'];
let sortedCities = cities.sort();
console.log(sortedCities);

//sort comparison function
let digits2 = [4,7,9,1,5,0,12,17];

let sorteddigits2 = digits2.sort((a,b) => (a-b)); //ascending order
console.log(sorteddigits2);

let reversedDigits2 = digits2.sort((a,b) => (b-a)); //descending order
console.log(reversedDigits2);

// Exercise: sort cities in ascending and descending order

//filter
let filteredDigits = digits.filter((x) => x < 7);
console.log(filteredDigits);
console.log(filteredDigits.sort((x,y) => (x-y)));

//includes
let includes6 = digits.includes(6);
console.log(includes6);

//every
let everyDigitGreaterThan3 = digits2.every(x => x > 3);
console.log(everyDigitGreaterThan3);

//some
let numbers = [2,4,8,16];
let someNumbers = numbers.some(x => x > 3);
console.log(someNumbers);

