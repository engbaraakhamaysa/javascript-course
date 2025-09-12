/*
  <body>
    <span class="my-span">My span </span>
    <span class="my-span special">my span 1</span>
    <span class="my-span">my span 2</span>
    <p>Hello</p>
    <p>Hello2</p>
    <div id="my-div">Hello Div</div>
    <form action="">
      <input type="text" name="one" value="Hello" />
    </form>
    <form action="">
      <input type="text" name="one" value="Hello" />
    </form>
    <a href="https://google.com">google</a>
    <a href="https://facebook.com">FaceBook</a>
    <script src="086_DOM_SelectElement.js"></script>
  </body>
 */

//Dom: Docunent Object Module

//Find Element By ID:
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

//Find Element By TagName:
let myTagElements = document.getElementsByTagName("p");
console.log(myTagElements);
console.log(myTagElements[0]);
console.log(myTagElements[1]);
myTagElements[1].innerHTML = "Test";

//Find Element By ClassName:
let classElement = document.getElementsByClassName("my-span");
console.log(classElement);
console.log(classElement[0]);

//Find Element By CSS Selectors:
let myQueryElement = document.querySelector(".special");
console.log(myQueryElement);

let myQueryAll = document.querySelectorAll(".my-span");
console.log(myQueryAll);
console.log(myQueryAll[0]);

//Find Element By Cllection:(title,body,images,form,links)

console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].one);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);
