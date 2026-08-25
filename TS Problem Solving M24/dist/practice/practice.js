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
const formatUserProfile = (user) => {
    const returnUserInfo = `${user.name} is ${user.age} years old and lives in ${user.city}.`;
    return returnUserInfo;
};
let userInfo = formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka",
});
console.log(userInfo);
//# sourceMappingURL=practice.js.map