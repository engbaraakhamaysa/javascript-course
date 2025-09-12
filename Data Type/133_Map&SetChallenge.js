let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
let mySet = new Set(n1);
let iterator = mySet.keys();

console.log(Math.max(...n2) * [...n1, ...n2].length);
