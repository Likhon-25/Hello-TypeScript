enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Satarday,
  Sunday,
}

let offDay = Day.Satarday;
console.log(Day.Sunday);
console.log(Day.Monday);

enum Roles {
  Admin = "Admin",
  Moderator = "Moderator",
  Guest = "Guest",
}
console.log(Roles.Admin);

const Tanjim = {
  name: "Likhon",
  Roles: Roles.Admin,
};

console.log(Tanjim);

enum Priority {
  Low,
  Moderate,
  Medium,
  High,
  Urgent,
}
