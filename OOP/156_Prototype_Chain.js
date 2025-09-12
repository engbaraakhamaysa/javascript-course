class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
}

let userOne = new User(100, "Baraa");
console.log(userOne.name);
console.log(User.prototype);
console.log(userOne);
User.prototype.sayWelcame = function () {
  return `Welcome ${this.name}`;
};
console.log(User.prototype);
console.log(userOne.sayWelcame());

Object.prototype.love = "Elzero Web School";
console.log(Object.love);

String.prototype.addDot = function (val) {
  return `..${this}..`;
};

let myString = "Baraa";
console.log(myString.addDot());
