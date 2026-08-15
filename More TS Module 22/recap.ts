const destenation: string = "Saudi Arabia";
const helpLine: number = 999;

const countries: string[] = [
  "Bangladesh",
  "Saudi-Arabia",
  "MalaiAsia",
  "Chaina",
];

console.log(countries);
function buyBook(titl: string, price: number, discount?: number): string {
  if (discount === undefined) {
    discount = 0;
  }

  return "The book ${title} const ${price - discount}";
}
