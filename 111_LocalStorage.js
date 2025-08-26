//Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

//Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);
//set color in page
document.body.style.background = window.localStorage.color;
//get key
console.log(window.localStorage.key(0));
//remove
window.localStorage.removeItem("color");
//Clear
window.localStorage.clear();
console.log(localStorage);
console.log(typeof localStorage);
