let myFriends = ["Osama", "Ahmed", "Sayed", "Ail", "Amira"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}

myFriends = [1, 1, "Osama", 10, 3, 3, "Ahmed", "3", "Sayed", "Ail", "Amira"];
let onlyName = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyName.push(myFriends[i]);
  }
}

console.log(onlyName);
