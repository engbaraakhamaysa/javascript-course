/*
  <body>
    <div>
      Hello Div
      <p>Hello p</p>
      <span>Hello span</span>
      <!--Comment-->
      Hello
    </div>
    <script src="091_Deal_With_Childrens.js"></script>
  </body>
*/

//Chidren,ChildNode,fristChild,lastChild,FirstElemntChild,LestElementChild

let myElement = document.querySelector("div");

console.log(myElement);

console.log(myElement.children); //HTMLCollection
console.log(myElement.children[0]);

console.log(myElement.childNodes); //NodeList
console.log(myElement.childNodes[1]);

console.log(myElement.firstChild);
console.log(myElement.lastChild);

console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);
