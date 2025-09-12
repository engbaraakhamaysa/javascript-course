/* 

Data And Time 
-Data Cnstructor 

Static Methods
-Date.new()

*/

let dateNow = new Date();

console.log(dateNow);

console.log(Date.now()); // 1000 Mills =  1 Second

let secodns = Date.now() / 1000;
console.log(secodns);

let minutes = secodns / 60; // Number of Minutes
console.log(minutes);

let hours = minutes / 60; // Number of Hours
console.log(hours);

let days = hours / 24; // Number of Days
console.log(days);

let years = days / 365; // Number Of Years
console.log(years);
