/*

String Methods

-Access with Index
-Access with charAt()
-length
-trim
-toUpperCase()
-toLowerCase()
-Chain Methods
 */

var theName = "Baraa";
//Access with Index
console.log(theName[1]);
console.log(theName[6]); //undefined
//Access with charAt
console.log(theName.charAt(1));
console.log(theName.charAt(6)); //null staring

//length
console.log(theName.length);

//tirm()
var theName = "  Baraa  ";
console.log(theName.trim()); //remov spce

//to upper case() & to lower case()
console.log(theName.toLocaleLowerCase());
console.log(theName.toLocaleUpperCase());

//chain Methods
console.log(theName.trim().charAt(2).toUpperCase());
