let myBtn = document.getElementById("btn");
//on click button
myBtn.onclick = function () {
  console.log("Onclic");
};

//on down Click button
myBtn.onmousedown = function () {
  console.log("onmousedown");
};

//leve button
myBtn.onmouseleave = function () {
  console.log("onmouseleave");
};

//window
window.onscroll = function () {
  console.log("Scroll");
};
