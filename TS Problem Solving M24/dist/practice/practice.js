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
    const marks = student.mark;
    const totalMaks = marks.reduce((sum, mark) => sum + mark, 0);
    const averate = totalMaks / marks.length;
    const result = averate >= 40 ? "Passed" : "Failed";
    const finalResult = {
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
console.log(info);
//# sourceMappingURL=practice.js.map