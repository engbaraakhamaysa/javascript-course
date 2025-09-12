//Number Challenge

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//Find Smallest Nuber in All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));

//Use Variabe a + d One Time To Get The Needed Output
console.log(Math.pow(parseInt(a), parseInt(d))); //10000

//Get Integer "2" From d Varible with 4 Methods
console.log(Math.floor(d));
console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(d.toFixed(0));

//Use Variables b + d To Get This Values
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(parseInt(b) / Math.ceil(d))); // 67 => Number
