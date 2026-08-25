"use strict";
// Problme 3
/*
type Product = {
    name: string
    price: number
}

const calculateTotal = (products : Product[]) => {
    const total : number = products.reduce((sum, item) => sum + item.price, 0)
    return total
}

const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
 
console.log(calculateTotal(products2));
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* interface User {
  name: string;
  age: number;
  city: string;
}

const formatUserProfile = (user: User): string => {
  return `I'm ${user.name}. I am ${user.age} years old. I leav in ${user.city} city`;
};

console.log(formatUserProfile({
    name: "Likhon",
    age: 20,
    city: "Rangpur"
}));*/
/*
interface Student {
  name: string;
  mark: number[];
}

interface Result {
  name: string;
  average: number;
  result: "Passed" | "Failed";
}
const getStudentResult = (student: Student) => {
  const marks = student.mark;
  const totalMaks: number = marks.reduce((sum, mark) => sum + mark, 0);

  const averate: number = totalMaks / marks.length;

  const result = averate >= 40 ? "Passed" : "Failed";

  const finalResult: Result = {
    name: student.name,
    average: averate,
    result: result,
  };

  return result;
};

let info = getStudentResult({
  name: "Rafi",
  mark: [20, 25, 90, 85],
});
console.log(info); */
// ------------------------------
const getTicketPrice = (age) => {
    if (age > 5) {
        return 0;
    }
    else if (age >= 5 && age <= 12) {
        return 100;
    }
    else if (age >= 13 && age <= 59) {
        return 200;
    }
    else {
        return 120;
    }
};
console.log(getTicketPrice(5));
//# sourceMappingURL=practice.js.map