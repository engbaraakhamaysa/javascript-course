/*

Number Methods 
-Tow Dots To Call A Methods
-toString()
-toFixed()
-parseInt()
-parseFlat()
-isInteger() [ES6]
-isNaN() [ES6]

 */

console.log((100).toString()); // output 100 is a string
console.log((100).toString()); // tow .. b.c 100.1  flooat dont need flooat i need strting number
console.log((100.5555).toFixed(2)); // 100.56 return tow nubmer befor .5555 & Fixed return string

console.log(Number("100 Baraa")); //Output NaN
console.log(+"100 Baraa"); //Output NaN
console.log(parseInt("100 Baraa")); //Output 100
console.log(parseInt("Baraa 100 Baraa")); //Output NaN
console.log(parseInt("100.44 baraa")); //dont float num return 100
console.log(parseFloat("100.22 baraa")); // output 100.22

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));

console.log(Number.isNaN("baraa"));
console.log(Number.isNaN("baraa " / 20));
