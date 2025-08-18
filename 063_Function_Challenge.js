let Name, Age, Status;
function showDitalis(a, b, c) {
  typeof a === "string"
    ? (Name = a)
    : typeof b === "string"
    ? (Name = b)
    : (Name = c);

  typeof a === "number"
    ? (Age = a)
    : typeof b === "number"
    ? (Age = b)
    : (Age = c);

  typeof a === "boolean"
    ? (Status = a)
    : typeof b === "boolean"
    ? (Status = b)
    : (Status = c);

  return `Hello ${Name} , Your Age Is ${Age} , ${
    Status === true ? "You Are Available" : "You Are Not Available"
  }`;
}

console.log(showDitalis("Baraa", 50, true));

console.log(showDitalis(30, "Ahmad", false));

console.log(showDitalis(true, "Baraa", 50));
