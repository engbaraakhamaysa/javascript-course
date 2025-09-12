//Ex
console.log(Array.from("Baraa")); //(5) ['B', 'a', 'r', 'a', 'a']
console.log(Array.from(1234)); //[]
//Ex:
console.log(
  Array.from("12345", function (n) {
    return +n + +n; //+ => String element to Number
  })
);
//Arrow function
console.log(Array.from("12345", (n) => +n + +n));

//Ex
let myArray = [1, 1, 1, 2, 3];
let mySet = new Set(myArray);
console.log(mySet); //unique values dont ruple Set(3) {1, 2, 3}
console.log(Array.from(mySet));
/*
(3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)
 */
//anther sultion
console.log([...new Set(myArray)]);

//EX:

function arrayFrom() {
  return Array.from(arguments);
}

console.log(arrayFrom("Baraa", "Osama", "Ahmed", 1, 3)); // Jion the Arguments to the array
