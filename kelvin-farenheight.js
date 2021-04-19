//Todays weather in Kelvin. Change this value to see what the conversions is in celsius, farenheit, and newton.
const kelvin = 290;
//celcius is 273 degrees less than kelvin
const celsius = kelvin - 273;
//celcius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//rounding down using Math.floor
fahrenheit = Math.floor(fahrenheit);

//celcius to Newton Scale
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, ${celsius} degrees celsius, and ${newton} degree newton.`);
