//Example If Condititons & Nested If Condition

let price = 100;
let diconut = false;
let diconutAmount = 30;
let conutry = "ps";
let student = true;

if (diconut === true) {
  price -= diconutAmount;
} else if (conutry === "Egypt") {
  price -= 40;
} else if (conutry === "ps") {
  if (student === true) {
    price -= diconutAmount + 50;
  } else {
    price -= diconutAmount + 10;
  }
} else {
  price -= 10;
}

console.log(price);
