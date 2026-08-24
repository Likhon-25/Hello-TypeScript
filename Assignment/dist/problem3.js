"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklyTotal = (expenses) => {
    const total = expenses.reduce((sum, item) => sum + item, 0);
    return total;
};
console.log(calculateWeeklyTotal([3, 4, 5, 6]));
//# sourceMappingURL=problem3.js.map