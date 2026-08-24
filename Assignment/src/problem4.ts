type Light = "red" | "yellow" | "green";

const getTrafficAction = (light: Light) : string => {
  if (light == "red") {
    return "Stop";
  } else if (light == "yellow") {
    return "Slow Down";
  }
  return "Go";
};

console.log(getTrafficAction("red"));
console.log(getTrafficAction("yellow"));
console.log(getTrafficAction("green"));
