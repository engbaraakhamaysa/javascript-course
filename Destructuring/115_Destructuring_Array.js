//115

//Example:
let myFrindes = ["Ahmend", "Baraa", "Sayed", "Ail"];
console.log(`myFrindes = ${myFrindes}`);

let [a, b, c, d] = myFrindes;

console.log(`Destructuring array = [${a} , ${b} , ${c} , ${d}]`);

//Example:
let a1 = 1;
let b1 = 2;
let c1 = 3;
let d1 = 4;

[a1, b1, c1] = myFrindes;
console.log(`Destructuring array = [${a1} , ${b1} , ${c1}]`);

//Example
[a = "A", b, c, d, e = "Baraa"] = myFrindes;

console.log(`Destructuring array = [${a} , ${b} , ${c} , ${d} , ${e}]`);

//Example
[x, y, , z] = myFrindes;
console.log(`Destructuring array = [${x} , ${y} , ${z}]`);
