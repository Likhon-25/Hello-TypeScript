"use strict";
const destenation = "Saudi Arabia";
const helpLine = 999;
const countries = [
    "Bangladesh",
    "Saudi-Arabia",
    "MalaiAsia",
    "Chaina",
];
console.log(countries);
function buyBook(titl, price, discount) {
    if (discount === undefined) {
        discount = 0;
    }
    return "The book ${title} const ${price - discount}";
}
