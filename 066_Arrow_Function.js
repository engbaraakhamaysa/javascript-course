//Ex1:

let Print = () => 10;

// let Print = function () {
//   return 10;
// };

console.log(Print());

//Ex2:

let printA = (num) => num;

// let printA = function (num) {
//   return num;
// };

console.log(printA(1));

//Ex3:

let printB = (N1, N2) => N1 + N2;

// let printB = function (N1, N2) {
//   return N1 + N2;
// };

console.log(printB(1, 2));

//Ex4: Multipe Line

let printC = (N1, N2) => {
  console.log("Hello");
  return N1 + N2;
};

console.log(printC(3, 4));
