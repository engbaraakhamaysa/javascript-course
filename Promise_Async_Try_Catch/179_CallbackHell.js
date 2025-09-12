/* 

Pyramid of Doom || Callback Hell

 - What is Callback
 - Callback Hell Example

 What Is Callback
 - A Function That Is Passed Into Another One As An Argument To Be Executed Later
 - Function To Handle Photos
 --- [1] Donwnload Photo From URL function1 callback 2
 --- [2] Resize Photo  functont 2 callback 3
 --- [3] Add Logo To The Photo function 3 callback3
 --- [4] Show The Photo In Website function


 --- Porblem Callback  Hell
 a(fucthion(rusletForma){
    b(resltsFromA , fuction(reuslt FromB){
        c(rusltFromB Fuction(resultFromC){
                d(rusltFromC Fuction(resultFromD){
                   E(rusltFromD Fuction(resultFromE){
                   cosnele.log(rusletsFromE)
        })
        })
        })
    })
 })
*/

function makeItRed(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iAmCallback() {
  console.log("I am A Callback Fuction");
}
setTimeout(iAmCallback, 2000);

setTimeout(() => {
  console.log("Downlod Photo From URL");
  setTimeout(() => {
    console.log("PResize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("Show The Photo In Website");
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
