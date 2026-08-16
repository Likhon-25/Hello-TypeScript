"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Satarday"] = 5] = "Satarday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
let offDay = Day.Satarday;
console.log(Day.Sunday);
console.log(Day.Monday);
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
const Tanjim = {
    name: "Likhon",
    Roles: Roles.Admin
};
console.log(Tanjim);
//# sourceMappingURL=enum.js.map