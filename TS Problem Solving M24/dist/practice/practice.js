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
const getStudentResult = (student) => {
    const marks = student.marks;
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const average = totalMarks / marks.length;
    const result = average >= 40 ? "Passed" : "Faild";
    const finalResult = {
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
//# sourceMappingURL=practice.js.map