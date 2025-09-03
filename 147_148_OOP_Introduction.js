function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary;
}

let userOne = new User(100, "Baraa", 5000);
let userTwo = new User(101, "Ahmed", 4000);

console.log(userOne.i, userOne.u, userOne.s);
console.log(userTwo.i, userTwo.u, userTwo.s);
