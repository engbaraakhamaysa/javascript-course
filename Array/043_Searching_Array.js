let myFriends = ["Ahmed", "Baraa", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

//indexof: he get the index number & he start searching  with the first

console.log(myFriends.indexOf("Ahmed")); //0
console.log(myFriends.indexOf("Ahmed", 2)); //4

//Lestindexof: he get ine index number but he start searching  with the lest

console.log(myFriends.lastIndexOf("Ahmed")); //4

console.log(myFriends.lastIndexOf("Ahmed", -2)); //0

//Includes:he searching element name is on the array if is in the array he return the true is not return false

console.log(myFriends.includes("Ahmed")); //true
console.log(myFriends.includes("Ahmed", 2)); //true
console.log(myFriends.includes("Khamaysa")); //False

//Example:the indexof & lestIndexOf Not Found he return the -1
if (myFriends.indexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(myFriends.lastIndexOf("Yazan"));
