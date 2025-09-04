//Parent Class
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }
}

//Derived Class from User
class Admin extends User {
  constructor(id, name, permission) {
    super(id, name);
    this.p = permission;
  }
}

//Derved Class from Admin

class Superman extends Admin {
  constructor(id, name, permission, ability) {
    super(id, name, permission);
    this.a = ability;
  }
}

let adminOne = new Admin(110, "Admin Baraa", 1);
let userOne = new User(100, "Baraa");

console.log(userOne.name);
console.log(userOne.sayHello());

console.log(adminOne.name);
console.log(adminOne.id);
console.log(adminOne.p);
console.log(adminOne.sayHello());
