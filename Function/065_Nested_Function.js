//Return Nested Function

//Ex1:

function sayMessage(fName, lName) {
  let massage = "Hello";

  //Nested Function
  function concatMsg() {
    massage = `${massage} ${fName} ${lName}`;
  }
  concatMsg();
  return massage;
}

console.log(sayMessage("Baraa", "Khamaysa"));

//Ex2:

function SayMessageA(fName, lName) {
  let massage = `Hello`;

  function concatMsg() {
    return `${massage} ${fName} ${lName}`;
  }

  return concatMsg();
}
console.log(SayMessageA("Baraa", "Khamayaa"));

//EX3:
function sayMessageB(fName, lName) {
  let message = `Hello`;
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }

    return `${message} ${getFullName()}`;
  }

  return concatMsg();
}
console.log(sayMessageB("Baraa", "khamysa"));
