"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatBookingConfirmation = (booking) => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};
const user = {
    name: "Likhon",
    guests: 5,
    time: "5.00 PM"
};
console.log(formatBookingConfirmation(user));
//# sourceMappingURL=problem2.js.map