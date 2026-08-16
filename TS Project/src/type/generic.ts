interface Response<T> {
    data: T;
    status: number
}

const transactionResponse : Response<string> = {
    data: "RIIT",
    status: 234
}

const transactionStatus : Response<boolean> = {
    data: true,
    status: 324
}

const transactionAmount : Response<number> = {
    data: 111,
    status: 324
} 