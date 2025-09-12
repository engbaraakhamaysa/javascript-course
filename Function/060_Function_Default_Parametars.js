//The first method is to enter a default value.
function sayHello(userName, age) {
  if (age === undefined) {
    age = "Unknown";
  }
  if (userName === undefined) {
    userName = "Unknown";
  }

  return `Hello ${userName} yor Age is ${age}`;
}

console.log(sayHello("Baraa"));

//The second method is to enter a default value.
function sayHello1(userName, age) {
  age = age || "Unknown";
  userName = userName || "Unknown";
  return `Hello ${userName} your Age is ${age}`;
}
console.log(sayHello1("", 66));

//The third method is to enter a default value.

function sayHello2(userName = "Unknown", age = "Unknown") {
  return `Hello ${userName} your Age is ${age}`;
}

console.log(sayHello2("Baraa"));
