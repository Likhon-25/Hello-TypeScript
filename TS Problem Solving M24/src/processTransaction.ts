interface Transaction {
  type: "deposit" | "withdraw";
  amount: number;
}

const processTransaction = (
  balance: number,
  transaction: Transaction,
): number | string => {
  if (transaction.type === "deposit") {
    return balance + transaction.amount;
  }
  if (transaction.type === "withdraw") {
    if (transaction.amount > balance) {
      return "Insufficient balance";
    }
  }
  return balance - transaction.amount;
};

console.log(processTransaction(5000, { type: "deposit", amount: 5000 }));
