//If Challenge
//Q1: Write With Teranary if Syntax
let a = 9;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

//Q2:Print Good

let st = "Elzero Web School";
//Q1
if (typeof st === typeof "34") {
  console.log("Good1");
}

console.log(`${2 * st.length}`);

// if ((2 * st.length).toString === "34") {
//   console.log("Good");
// }

if (`${2 * st.length}` === "34") {
  console.log("Good1");
}

// console.log(st.includes("w", "W"));
// if (st.includes("W") === true) {
//   st = "w";
//   //Q2
//   if (st === "w") {
//     console.log("Good2");
//   }
// }
// st = "Elzero Web School";

if (st.charAt(st.indexOf("W")) === "W") {
  console.log("Good W");
}

if (st !== "string") {
  console.log("Good3");
}

if (st === "number") {
  console.log("Good4");
}

console.log(st.substring(0, 6).repeat(2));

if (st.substring(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good5");
}
