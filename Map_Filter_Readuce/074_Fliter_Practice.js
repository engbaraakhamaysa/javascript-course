//Ex:

let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (element) {
    return element.length <= 4; // get the word lingth Equle of less than 4.
  })
  .join(" ");

console.log(smallWords);

//Ex:

let ignoreNumber = "Elz123er4o";
let ign = ignoreNumber
  .split("")
  .filter(function (element) {
    return isNaN(parseInt(element));
  })
  .join("");
console.log(ign);

//Ex:

let mix = "A13BS2ZX";
let mixedConteut = mix
  .split("")
  .filter(function (element) {
    return !isNaN(parseInt(element));
  })
  .map(function (element) {
    return element * element;
  })
  .join("");

console.log(mixedConteut);
