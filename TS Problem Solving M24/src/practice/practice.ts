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

// ------------------------------Problem 1 ----------------------

/*const getTicketPrice = (age: number): number => {
  if (age > 5) {
    return 0;
  } else if (age >= 5 && age <= 12) {
    return 100;
  } else if (age >= 13 && age <= 59) {
    return 200;
  } else {
    return 120;
  }
};

console.log(getTicketPrice(4));*/

// ------------------------------Problem 2 ----------------------
/*const getStockStatus = (stock : number) : string =>{
  if(stock === 0){
    return "Out of Stock"
  } else if (stock >= 1 && stock <= 5){
    return "Almost Sold Out"
  } else if(stock >= 6 && stock <= 20){
    return "Available"
  } else{
    return "In Stock"
  }
}
console.log(getStockStatus(21));*/

// ------------------------------Problem 3 ----------------------
/*interface User {
  name: string;
  age: number;
  city: string;
}
const formatUserProfile = (user: User): string => {
  const returnUserInfo = `${user.name} is ${user.age} years old and lives in ${user.city}.`;

  return returnUserInfo
};

let userInfo = formatUserProfile({
  name: "Fahim",
  age: 22,
  city: "Dhaka",
});

console.log(userInfo);*/

// ------------------------------Problem 4 ----------------------
/*
type Product = {
  name: string;
  price: number;
};
const calculateCartTotal = (products: Product[]) => {
  const total = products.reduce((sum, item) => sum + item.price, 0);
  return total;
};

const products = [
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "USB Cable", price: 700 },
];

console.log(calculateCartTotal(products)); */

// ------------------------------Problem 5 ----------------------

interface Students {
  name: string;
  marks: number[];
}

interface Result {
  name: string;
  average: number;
  result: "Passed" | "Faild";
}

const getStudentResult = (student: Students): Result => {
  const marks: number[] = student.marks;

  const totalMarks: number = marks.reduce((sum, mark) => sum + mark, 0);

  const average: number = totalMarks / marks.length;

  const result = average >= 40 ? "Passed" : "Faild";

  const finalResult: Result = {
    name: student.name,
    average: average,
    result: result,
  };

  return finalResult;
};

const studentInfo = getStudentResult({
  name: "Rafi",
  marks: [80, 75, 90, 85],
});

console.log(studentInfo);
