//Spread wiht srting

console.log("Baraa"); //Baraa
console.log(..."Baraa"); //B a r a a
console.log([..."Baraa"]); //Output a Array:(5) ['B', 'a', 'r', 'a', 'a']

//Concatenete Arrays:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let allArray = [...arr1, ...arr2];
console.log(allArray);

//Copy Array:
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let copiedArray = [...myArray];
console.log(copiedArray);

//Push Inside Array
let allFrindes = ["Baraa", "Osama", "Ahmed"];
let newFrinds = ["Sameh", "Mohamed"];
allFrindes.push(...newFrinds);
console.log(allFrindes);

//Use Wiht math Object:
let myNumbers = [10, 20, -100, 1000, 500];
console.log(Math.max(...myNumbers, 8000));

//Spread with Objects
let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });
