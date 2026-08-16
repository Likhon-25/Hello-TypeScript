interface Employee {
  name: string;
  id: number;
  department: string;
  salary?: number;
}

const mark: Employee = {
  name: "Mark",
  id: 102,
  department: "CT",
  salary: 15,
};
const scor: Employee = {
  name: "Mark",
  id: 102,
  department: "CT",
};

const team: Employee[] = [
  { name: "Mark", id: 102, department: "CT" },
  { name: "Bill", id: 102, department: "CT" },
];

function printEmployeeDetails(employee: Employee): void {
  console.log(`Name ${employee.name}`);
  console.log(`ID ${employee.id}`);
  console.log(`Department ${employee.department}`);
}

printEmployeeDetails({ name: "elon", id: 44, department: "ET" });

function displayEmployeeDetails({ name, id, department, salary }: Employee) {
  
}
