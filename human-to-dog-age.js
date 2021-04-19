//The age in human years which will translate to dog years. Change the myAge value to a human age you want to convert to dog years. 
let myAge = 24;
//First two years of a dogs life equals approx 10.5 human years each.
let earlyYears = 2;
earlyYears *= 10.5;
//The years after the first two years, hence subtract the 2. 
let laterYears = myAge - 2;
//Each year following the first 2 years is approx 4 in dog years.
laterYears *= 4;
//console.log(earlyYears);
//console.log(laterYears);

//age in dog years
var myAgeInDogYears = earlyYears + laterYears;
//Name in lowercase.
var myName = 'Karam'.toLowerCase();

//Using string interpolation.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
