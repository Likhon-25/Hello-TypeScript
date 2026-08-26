interface Student {
  name: string;
  marks: number[];
}

interface Result {
  name: string;
  average: number;
  result: "Passed" | "Faild";
}

const getStudentResult = (student: Student): Result => {
  const marks: number[] = student.marks;

  const totalMarks: number = marks.reduce((sum, mark) => sum + mark, 0);

  const average = totalMarks / marks.length;

  const result = average >= 40 ? "Passed" : "Faild";

  const r: Result = {
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
