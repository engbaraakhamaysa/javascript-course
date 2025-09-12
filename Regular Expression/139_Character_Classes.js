// /b => match at beginning or and of a word.
// /B => match not at the beginning end of word.
// Test Method : pattern.test(input);

let names = "sayed 1Spam 2Spam 3Spam Spam4 Spam5 Aspam Baraa";

let re = /(\bspam|spam\b)/gi;

console.log(names.match(re));

console.log(re.test(names)); //true
console.log(/(\bspam|spam\b)/gi.test("Baraa")); //false
console.log(/(\bspam|spam\b)/gi.test("1Spam")); //true
