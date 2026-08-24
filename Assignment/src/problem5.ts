interface User {
  total: number;
  average: number;
}

const getQuizSummary = (scores : number[]): User =>{
    if(scores.length === 0){
        return {total : 0, average: 0}
    }

    const total : number = scores.reduce((sum, acc) => sum + acc, 0 )
    const average = total / scores.length
    return {total, average}

}

const mark = [8, 9, 7, 10];

console.log(getQuizSummary(mark));