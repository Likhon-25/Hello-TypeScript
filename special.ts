function calculateTax(amount: number | string | null, taxRate: number): number {
  if (typeof amount === "string") {
    amount = parseFloat(amount);
  }

  return amount * taxRate;
}

const myTax = calculateTax(100, 0.15);
const yourTax = calculateTax("200", 0.2);
