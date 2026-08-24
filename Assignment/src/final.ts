//Problem-01: Battery Level Status
const getBatteryStatus = (percentage: number): string => {
  if (percentage >= 0 && percentage <= 20) {
    return "Low";
  } else if (percentage >= 21 && percentage <= 50) {
    return "Medium";
  } else if (percentage >= 51 && percentage <= 90) {
    return "High";
  }
  return "Full";
};

//Problem-02: Table Booking Confirmation
interface User {
  name: string;
  guests: number;
  time: string;
}
const formatBookingConfirmation = (booking: User): string => {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};

const user = {
  name: "Likhon",
  guests: 5,
  time: "5.00 PM",
};

//Problem-03: Weekly Expense Tracker
const calculateWeeklyTotal = (expenses: number[]): number => {
  const total: number = expenses.reduce((sum, item) => sum + item, 0);
  return total;
};

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green";

const getTrafficAction = (light: Light): string => {
  if (light == "red") {
    return "Stop";
  } else if (light == "yellow") {
    return "Slow Down";
  }
  return "Go";
};

//Problem-05: Quiz Score Summary
interface User {
  total: number;
  average: number;
}

const getQuizSummary = (scores: number[]): User => {
  if (scores.length === 0) {
    return { total: 0, average: 0 };
  }

  const total: number = scores.reduce((sum, acc) => sum + acc, 0);
  const average = total / scores.length;
  return { total, average };
};
