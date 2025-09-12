//Use Name Function
function clac(n1, n2) {
  return n1 + n2;
}

console.log(clac(10, 20));

//Use Anonymous Function

//Ex1:
let Calculator = function (n1, n2) {
  return n1 + n2;
};

console.log(Calculator(10, 2));

//Ex2:

setTimeout(function () {
  console.log("Good");
}, 2000); //He print the Good word after 2s

//Ex3:

//In body:    <button id="show">Show</button>

document.getElementById("show").onclick = function () {
  document.writeln(`<h1>Show</h1>`);
};
