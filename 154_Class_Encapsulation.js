class User {
  //Private Property
  #e;
  constructor(id, name, eSalary) {
    this.id = id;
    this.name = name;
    this.#e = eSalary;
  }
  //Get Salary (Encapsulation)
  getSalary() {
    return parseInt(this.#e);
  }
}

class Admin extends User {
  constructor(id, name, eSalary, adminNumber) {
    super(id, name, eSalary);
    this.a = adminNumber;
  }
}

let userOne = new User(100, "Baraa", "1000$");

console.log(userOne.id, userOne.name);
//console.log(userOne.#e); //Private field '#e' must be declared in an enclosing class
console.log(userOne.getSalary());
//console.log(User.#e); //#e => For each object individually.static #something => For the class itself, but still private.

let userAdmin = new Admin(100, "BaraaAdmin", 1000, 1);
console.log(userAdmin.id, userAdmin.name, userAdmin.getSalary(), userAdmin.a);
