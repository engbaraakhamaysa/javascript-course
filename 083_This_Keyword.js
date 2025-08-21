console.log(this); //(this) mean I am Where  , I am on the Window
console.log(this === window); //True

myVar = 100;
console.log(window.myVar); // Can arived to myVar with window
console.log(this.myVar); // this : he some the window

function sayHello() {
  console.log(this);
  return this;
}
sayHello();
console.log(sayHello() === window); //True

//<body>     <button id="cl">Click</button>

document.getElementById("cl").onclick = function () {
  console.log(this); // Output : <button id="cl">Click</button>
}; // this here not window b.c he (this) to Owner Function

let user = {
  age: 25,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(user);
console.log(user.ageInDays());
