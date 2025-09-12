let myP = document.querySelector("p");

function one() {
  console.log("Massage From onClick 1");
}

function two() {
  console.log("Massage From onClick 2");
}

myP.onclick = one;
myP.onclick = two; //override

//sultion the override
myP.addEventListener("click", function () {
  console.log("Message From onClick 1 Event");
});
myP.addEventListener("click", one);
myP.addEventListener("click", two);

//Ex
//Creat Copyy with p
myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloed = document.querySelector(".clone");//Error

// cloed.onclick = function () {
//   console.log("I Am Cloned");
// };

//sultion Add Eventlistener
document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("I Am Clone");
    console.log(e.target); //print the element & attributs
  }
});
