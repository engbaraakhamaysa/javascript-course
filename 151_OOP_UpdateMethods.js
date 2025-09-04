class User {
  constructor(id, name, salary) {
    this.i = id;
    this.n = name;
    this.s = salary;
  }
  updateName(newName) {
    this.n = newName;
  }
}

let userOne = new User(100, "Baraa", 1000);

console.log(`User Name Is : ${userOne.n}`);

userOne.updateName("Baaaraaa");
console.log(`User Name After Update : ${userOne.n}`);

let strOne = "Baraa";
let strTow = new String("Baraa");

console.log(typeof strOne); //String
console.log(typeof strTow); //Object

console.log(strOne instanceof String); //False
console.log(strTow instanceof String); //true

console.log(strOne.constructor === String); //true
console.log(strTow.constructor === String); //true
