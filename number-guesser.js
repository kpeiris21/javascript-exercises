let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
return Math.floor(Math.random() * 10);
};
const generateComp = () => {
    return Math.floor(Math.random() * 10);
    };

const compareGuesses = user => {
    let target = generateTarget();
    let comp   = generateComp();
    let userDistance = Math.abs(target - user);
    let compDistance = Math.abs(target - comp);
    return userDistance <= compDistance
    
};

console.log(generateTarget());
console.log(generateComp());
console.log(compareGuesses(9));
