/*

  <body>
    <div>Div</div>
    <p class="para" title="paragraph" data-src="Testing">paragraph</p>
    <script src="088_Check_Attributes.js"></script>
  </body>
 */

//Element.attributes

console.log(document.getElementsByTagName("p")[0].attributes);

//Elmenent.hasAttribute & Elament.hasAttributes

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    //Element.removeAttribute
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log("Not Found");
}

//Elament.hasAttributes

let myDiv = document.getElementsByTagName("div")[0];

console.log(myDiv.hasAttributes());

if (myDiv.hasAttributes()) {
  console.log("Has Atributes");
} else {
  console.log("Has Not have Attributes");
}
