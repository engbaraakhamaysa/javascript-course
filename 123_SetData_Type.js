let myData = [1, 1, 1, 2, 3];
// let mySetData = new Set([1, 1, 1, 2, 3]);
// let mySetData = new Set(myData);
// let mySetData = new Set().add(1).add(1).add(1).add(2).add(3);
let mySetData = new Set();

mySetData.add(1).add(1).add(1).add(2).add(3).add("A");

console.log(`Is set Has => A ${mySetData.has("A")}`); //true
console.log(`Is set Has => A ${mySetData.has("a")}`); //false

console.log(myData);
console.log(mySetData);

console.log(`#`.repeat(50));

console.log(mySetData.size);

console.log(myData[0]);
console.log(mySetData[0]); //undefined

console.log(mySetData.delete(1)); //true
console.log(mySetData.delete(10)); //falsee

console.log(mySetData);
console.log(mySetData.size);

mySetData.clear();

console.log(mySetData);
