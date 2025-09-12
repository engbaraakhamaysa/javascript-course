let myNume = [1, 2, 3, 4, 5, 6];

let newArray = [];
for (let i = 0; i < myNume.length; i++) {
  newArray.push(myNume[i] + myNume[i]);
}

console.log(newArray);

//Same Idea With Map:
//Anonymous Function
let addSelf = myNume.map(function (element, index, arr) {
  console.log(`Element => ${element}`);
  console.log(`index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(`This ـ callback function thisArg => ${this}`);

  return element + element;
}, 10);

console.log(`Add Sealf = ${addSelf}`);

//In one Line Arrow Function

let aaddSelf = myNume.map((element) => element + element);
console.log(`Add Sealf = ${aaddSelf}`);

//Function Name:

function addition(element) {
  return element + element;
}

let add = myNume.map(addition);
console.log(add);
