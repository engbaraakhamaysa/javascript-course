setTimeout(function () {
  console.log("Hello");
}, 3000); //print hello after 3s

function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 4000); //print Hello after 4s

function sayHelloUser(user) {
  console.log(`Hello ${user}`);
}
setTimeout(sayHelloUser, 4000, "Baraa"); //print Hello Baraa after 4s

//EX

function sayMsg() {
  console.log("I Am Messeage");
}
let counter = setTimeout(sayMsg, 3000);

let but = document.createElement("button");
but.textContent = "Click";

document.body.appendChild(but);
//stop Timeout
but.onclick = function () {
  clearTimeout(counter);
};
