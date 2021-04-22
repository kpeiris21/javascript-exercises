let raceNumber = Math.floor(Math.random() * 1000);

//Change boolean value and runnerAge for different results.
let registeredEarly = false;
const runnerAge = 18;

if (registeredEarly && runnerAge >18) {
  raceNumber += 1000;
};
if (registeredEarly && runnerAge > 18){
  console.log(`Your race number is ${raceNumber} and you will race at 9:30am.`)
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`late adults run at 11:00am and your race number is ${raceNumber}.`)
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30pm (regardless of registration time). Your race number is ${raceNumber}.`)
} else {
  console.log('See front desk if you are 18 years old.')
};
