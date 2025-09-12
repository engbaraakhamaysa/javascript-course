// import baraa, {
//   myNumber,
//   arr,
//   saySomething as s,
// } from "./168_NamedVsDefaultExport.js";

// console.log(myNumber);
// console.log(arr);
// console.log(s());

// console.log(baraa()); // defult export anything Name

//impot All
import * as all from "./168_NamedVsDefaultExport.js";

console.log(all);
console.log(all.arr);
console.log(all.myNumber);
console.log(all.default());
console.log(all.saySomething());
