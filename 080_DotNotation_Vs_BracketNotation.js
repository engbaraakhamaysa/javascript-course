myVar = "country";

let user = {
  theName: "Baraa",
  "conutry of": "Ps",
  country: "ps",
};

console.log(user.theName);
console.log(user["theName"]);

// console.log(user.conutry of) this error crrecut is:
console.log(user["conutry of"]);

//Diynamic varilbe

console.log(user.myVar); // undefined
console.log(user[myVar]); // use Bracket Notation to ariverd to prpts user country
