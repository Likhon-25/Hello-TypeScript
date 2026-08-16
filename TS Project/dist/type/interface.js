"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mark = {
    name: "Mark",
    id: 102,
    department: "CT",
    salary: 15,
};
const scor = {
    name: "Mark",
    id: 102,
    department: "CT",
};
const team = [
    { name: "Mark", id: 102, department: "CT" },
    { name: "Bill", id: 102, department: "CT" },
];
function printEmployeeDetails(employee) {
    console.log(`Name ${employee.name}`);
    console.log(`ID ${employee.id}`);
    console.log(`Department ${employee.department}`);
}
printEmployeeDetails({ name: "elon", id: 44, department: "ET" });
function displayEmployeeDetails({ name, id, department, salary }) {
}
//# sourceMappingURL=interface.js.map