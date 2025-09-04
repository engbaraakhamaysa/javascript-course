class User {
  // Static Property
  static count = 0;

  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    User.count++;
  }

  //Static Methodes
  static sayHello() {
    return `Hello From Class User`;
  }
  static countMember() {
    return `${this.count} Members `;
  }
}

let userOne = new User(100, "Baraa", 5000);
let userTwo = new User(101, "Ahmed", 6000);

console.log(userOne.name);
console.log(userTwo.count); // undefined b.c is a static
console.log(userTwo.sayHello); // undefined b.c is a static

console.log(User.count);
console.log(User.sayHello());
console.log(User.countMember());
