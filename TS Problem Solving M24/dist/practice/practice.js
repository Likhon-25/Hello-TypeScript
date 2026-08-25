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
    return totalMaks;
};
let info = getStudentResult({
    name: "Rafi",
    mark: [80, 75, 90, 85],
});
console.log(info);
//# sourceMappingURL=practice.js.map