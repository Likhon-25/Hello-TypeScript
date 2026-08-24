// Problem 1
const getTicketPrice = (age: number): number => {
  if (age < 5) {
    return 0;
  } else if (age >= 5 && age <= 12) {
    return 100;
  } else if (age >= 13 && age <= 59) {
    return 200;
  }
  return 120;
};

console.log(getTicketPrice(63));
