class User {
  constructor(id, name, salary) {
    //Properties
    this.id = id;
    this.name = name || "Unknown";
    this.salary = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.name} Your Salary Is ${this.salary}`;
    };
  }
  //Methods
  writeMsg() {
    return `Hello ${this.name} Your Salary Is ${this.salary}`;
  }
}

let userOne = new User(100, "Baraa", 4000);
let userTwo = new User(101, "", 6000);

console.log(userOne.id, userOne.name, userOne.salary);
console.log(userOne.msg());
console.log(userOne.writeMsg());

console.log(userTwo.id, userTwo.name, userTwo.salary);
//Native Code
console.log(userTwo.msg);
console.log(userTwo.writeMsg);
