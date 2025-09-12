setInterval(function () {
  console.log(`Hello`);
}, 1000);

function sayHello() {
  console.log("Hello");
}

setInterval(sayHello, 1000);

function sayHelloUser(user) {
  console.log(`Hello ${user}`);
}

setInterval(sayHelloUser, 1000, "Baraa");

//Ex

let div = document.createElement("div");
function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(connt);
  }
}
document.body.appendChild(div);
let connt = setInterval(countDown, 1000);
