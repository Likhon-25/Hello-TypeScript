"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getQuizSummary = (scores) => {
    if (scores.length === 0) {
        return { total: 0, average: 0 };
    }
    const total = scores.reduce((sum, acc) => sum + acc, 0);
    const average = total / scores.length;
    return { total, average };
};
const mark = [8, 9, 7, 10];
console.log(getQuizSummary(mark));
//# sourceMappingURL=problem5.js.map