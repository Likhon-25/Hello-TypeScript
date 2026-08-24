// interface Response {
//   //   data: any;
//   //   data: string | number | boolean | object | null;
//     // status: number
// }

interface Response<T> {
  data: T;
  status: number;
}

const transactionRespnse: Response<string> = {
  data: "Transaction Successfully",
  status: 200,
};

const transactionStatus: Response<boolean> = {
  data: true,
  status: 500,
};

function getLength<item>(array: item[]): number {
  return array.length;
}

getLength<string>(["", "asdf", "jkl"]);
getLength<number>([1, 2, 3, 4, 5]);


