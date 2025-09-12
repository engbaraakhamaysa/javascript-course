//Set:

//1-Type of Data:
let mySet = new Set([1, 2, 3, 4, 5, "A", "B"]);
console.log(mySet);

//2-Sizs:
console.log(mySet.size);

//3-Value + Keys:
let iterator = mySet.keys();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//ForEach:

mySet.forEach((el) => console.log(el));

//WeakSet:

//Type of Data
let myWeakSet = new WeakSet([
  { A: 1, B: 3, D: 2 },
  { G: 3, T: 3 },
]);
console.log(myWeakSet);

//Dose Not have Size & Keys & ForEach
