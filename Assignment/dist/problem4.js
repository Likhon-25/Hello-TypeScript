"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTrafficAction = (light) => {
    if (light == "red") {
        return "Stop";
    }
    else if (light == "yellow") {
        return "Slow Down";
    }
    return "Go";
};
console.log(getTrafficAction("red"));
console.log(getTrafficAction("yellow"));
console.log(getTrafficAction("green"));
//# sourceMappingURL=problem4.js.map