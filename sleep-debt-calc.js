const getSleepHours = days => {

  if (days === 'monday') {
  return 8
  } else if (days === 'tuesday') {
  return 90
  } else if (days === 'wednesday') {
  return 20
  } else if (days === 'thursday') {
  return 11
  } else if (days === 'friday') {
  return 8
  } else if (days === 'saturday') {
  return 11
  } else if (days === 'sunday') {
  return 8
  };
};
console.log(getSleepHours('tuesday'));

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +  getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 10.5;
  return idealHours * 7
};
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Getting the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
  console.log('Oversleeping by ' + (actualSleepHours - idealSleepHours) + '.')
  } else if (actualSleepHours < idealSleepHours) {
  console.log('Need at least ' + (idealSleepHours - actualSleepHours) + ' hours more sleep.')
  };
};
calculateSleepDebt()
