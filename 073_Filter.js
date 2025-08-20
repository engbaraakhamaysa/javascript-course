//Test Map Vs Filter:
let number = [11, 20, 2, 5, 17, 15];
let addMap = number.map(function (element) {
  return element + element;
});

console.log(addMap);

let addFliter = number.filter(function (element) {
  return element + element; // This in fliter maun is True
});

console.log(addFliter);

//EX1:

let friends = ["Ahmad", "Sameh", "Bara", "Asmaa", "Sayed"];

let filterFriends = friends.filter(function (element) {
  return element.startsWith("A");
});

console.log(filterFriends);

//Ex:

let evenNumber = number.filter(function (element) {
  return element % 2 === 0;
});

console.log(evenNumber);
