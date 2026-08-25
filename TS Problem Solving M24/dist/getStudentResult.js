"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (student) => {
    const marks = student.marks;
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const average = totalMarks / marks.length;
    const result = average >= 40 ? "Passed" : "Faild";
    const r = {
        name: student.name,
        average: average,
        result: average >= 40 ? "Passed" : "Faild",
    };
    return r;
};
let info = getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85],
});
console.log(info);
//# sourceMappingURL=getStudentResult.js.map