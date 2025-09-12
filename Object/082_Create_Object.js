// let user = {
//   age: 20,
// };
// let user = new Object();
let user = new Object({
  age: 22,
});
console.log(user);
console.log(user.age);

//Create property
user.Name = "Baraa";
console.log(user);

//Create Method
user.sayHello = function () {
  return `Hello`;
};

//Create property
user["conutry"] = "Ps";
//Edit Proprty
user.age = 25;

console.log(user);
console.log(user.age);
console.log(user.conutry);
console.log(user.sayHello());
