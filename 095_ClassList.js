let element = document.getElementById("my-div");

console.log(element.classList); //get all class for div

console.log(typeof element.classList); //Object

console.log(element.classList.contains("show")); //sareach to class he found retern true not false
console.log(element.classList.contains("baraa")); //sareach to class he found retern true not false

console.log(element.classList.item(0)); //get the class the index 0 is a one

element.onmousedown = function () {
  element.classList.add("Add-one", "Add-tow"); //he add a classes to element
  console.log(element.classList);
};

element.onclick = function () {
  element.classList.remove("Add-one", "Add-tow"); //he remove a classes to element
  console.log(element.classList);
};

element.onmousemove = function () {
  element.classList.toggle("baraa"); //he remov & Add class baraa
  console.log(element.classList);
};
/*

  <body>


    <script src="095_ClassList.js"></script>
  </body>
 */
