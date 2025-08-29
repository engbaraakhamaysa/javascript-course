//Map => Does Not contain key By Default
//Object => Has Defalt key

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject); //with Properties
console.log(myEmptyObject); //No Properties
console.log(myMap);

//Map => Key Can By Anything [Function , Object , Any Primitive]
//Object => Srring of Symbol

let myNewObject = {
  10: "Numbers",
  "10": "String",
};


console.log(myNewObject[10]);//Overrloed
console.log(myNewObject["10"]);
console.log(myNewObject);


let  myNewMap = new Map();
myNewMap.set(10,"Numbers");
myNewMap.set("10","String");
myNewMap.set(true,"Boolen");
myNewMap.set({a:2,b:2},"Obj");
myNewMap.set(function fun(){},"Function");

console.log(myNewMap.get("10"));
console.log(myNewMap.get(10));

console.log(myNewMap)