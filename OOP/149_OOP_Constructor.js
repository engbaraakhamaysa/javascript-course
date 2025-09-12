//Function Constructor
function UserA(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary;
}

//Class Constructor Syntax

class User {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
}

let userOne = new User(100, "Baraa", 2000);
console.log(userOne.id, userOne.name, userOne.salary);

console.log(userOne instanceof User); // true: the userOne is instance of User
console.log(userOne.constructor === User); //true
