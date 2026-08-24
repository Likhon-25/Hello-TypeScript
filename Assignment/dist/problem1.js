"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBatteryStatus = (percentage) => {
    if (percentage == 0 && percentage <= 20) {
        return "Low";
    }
    else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    }
    else if (percentage >= 51 && percentage <= 90) {
        return "High";
    }
    return "Full";
};
console.log(getBatteryStatus(5));
//# sourceMappingURL=problem1.js.map