const user = {
  theName: "Baraa",
  theAge: 25,
  cuntry: "ps",
};
let theName = user.theName;
let theAge = user.Age;
let cuntry = user.cuntry;
console.log(`User Info : Name:${theName} , Age:${theAge} , Cuntry:${cuntry}`);

//Destructuring
({ theName, cuntry, theAge } = user); //() or const

console.log(theName, theAge, cuntry);
