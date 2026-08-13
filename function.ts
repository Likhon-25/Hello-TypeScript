// function add(num1, num2) {
//   const total = num1 + num2;
//   return total;
// }

function add(num1: number, num2: number): number {
  const total = num1 + num2;
  return total;
}

// const restult : string = add(5, 5);  // Error
const restult: number = add(5, 5);
console.log(restult);

function calculate(number: number[], tax: number, account?: string): boolean {
  return false;
}

calculate([23, 45, 77], 582, "DDBL");

function doubleOrHalf(num: number[], istrue: boolean): boolean {
  return true;
}
