"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPatientStatus = (patient) => {
    if (patient.type === "general") {
        return "General patient";
    }
    else if (patient.type === "emergency") {
        if (patient.emergencyLevel === 1) {
            return "Critical emergency";
        }
        else if (patient.emergencyLevel === 2) {
            return "Serious emergency";
        }
    }
    return "Moderate emergency";
};
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
//# sourceMappingURL=getPatientStatus.js.map