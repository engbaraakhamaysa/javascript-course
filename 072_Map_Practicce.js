//Ex1:
let swppingCase = "elZERo";

let swpping = swppingCase
  .split("")
  .map(function (element) {
    return element === element.toUpperCase()
      ? element.toLocaleLowerCase()
      : element.toUpperCase();
  })
  .join("");
console.log(swpping);

//Ex2:

let inverNumbar = [1, -10, -20, -100, 13, 20, 40];

let inver = inverNumbar.map(function (element) {
  return -element;
});

console.log(inver);

//Arrow Function

let inverr = inverNumbar.map((element) => -element);

console.log(inverr);

//Ex3:

let ignorNumber = "Elz123eer40o";

let ign = ignorNumber
  .split("")
  .map(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .join("");

console.log(ign);

//Arrow Function

let ignn = ignorNumber
  .split("")
  .map((element) => (isNaN(parseInt(element)) ? element : ""))
  .join("");

console.log(ignn);
