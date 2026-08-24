const calculateWeeklyTotal = (expenses: number[]): number => {
  const total: number = expenses.reduce((sum, item) => sum + item, 0);
  return total;
};

console.log(calculateWeeklyTotal([3, 4, 5, 6]));
