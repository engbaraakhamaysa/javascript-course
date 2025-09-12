//102
window.document.title = "Hello.js";

window.console.log("Hello");

//103: Alert,Confirm & Prompt

//alert
// window.alert("test");
// this.alert("test");
alert("test");
console.log("Hello1");

//confirm
let confirmMsg = confirm("Are You Sure?"); //he reternd true of flase
console.log(confirmMsg);
if (confirmMsg === true) {
  console.log("Item Deleted");
} else {
  console.log("Item Not Deleted");
}

//Prompt

let PromptMsg = prompt("Good Day To You?", "Writ Day With 3 Chrecters");
console.log(PromptMsg);
