class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
}
//Prototype is the object that stores common methods for all objects created from the same class or constructor function.

let userOne = new User(100, "Baraa");
console.log(userOne.name);
console.log(User.prototype);

let str = "Baraa";
console.log(String.prototype);
