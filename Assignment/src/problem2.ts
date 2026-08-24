interface User {
  name: string;
  guests: number;
  time: string;
}
const formatBookingConfirmation = (booking : User): string =>{
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

const user = {
    name: "Likhon",
    guests: 5,
    time: "5.00 PM"
}
console.log(formatBookingConfirmation(user));
