let myFriends = ["Ahemd", "Sayed", "Ali", "Osame", "Gamal"];

let myNewFriends = ["Samar", "Samah"];

let schoolFriends = ["Haytham", "Shady"];
//Concat : concat Arrays together and can Add elements or new array
let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gamal", [1, 2]);
console.log(allFriends);

//Join: He Separate elements by use any symbol

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join(" | "));
console.log(allFriends.join(" | ").toUpperCase());
