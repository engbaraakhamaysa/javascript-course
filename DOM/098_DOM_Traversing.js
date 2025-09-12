let span = document.querySelector(".two");

console.log(span.nextSibling); //next anything comment text element
console.log(span.nextElementSibling); //only next elemnt
console.log(span.nextElementSibling.remove()); //remov elemnt three

console.log(span.previousSibling); //befor anthing comment text elemnt tow
console.log(span.previousElementSibling); //befor only elemant

span.onclick = function () {
  span.previousElementSibling.style.color = "red";
};
/*
  <body>
    <div id="my-div">
      <span class="one">one</span>
      <!--Comment1-->
      <span class="two">two</span>
      <!--Comment2-->
      <span class="three">three</span>
    </div>
    <script src="098_DOM_Traversing.js"></script>
  </body>
*/
