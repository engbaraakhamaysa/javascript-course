//EX:

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "Propaganda_Tow",
  "AAA",
  "Battery",
];

let check = theBiggest.reduce(function (acc, currant) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${currant}`);
  console.log(acc.length > currant.length ? acc : currant);
  console.log(`###########`);
  return acc.length > currant.length ? acc : currant;
});

console.log(check);

//Ex:

let removeChar = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChar
  .filter(function (element) {
    return !element.startsWith("@");
  })
  .reduce(function (acc, currant) {
    return `${acc}${currant}`;
  });

console.log(finalString);
