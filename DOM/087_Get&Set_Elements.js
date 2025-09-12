/*
  <body>
    <image></image>
    <div class="js">Java Script <span>Div</span> &lt;span&gt;</div>
    <a class="link" href="#">Google</a>
    <script src="087_Get&Set_Elements.js"></script>
  </body>
 */

//innarHtml & textContet:

let myElement = document.querySelector(".js");
console.log(myElement.innerHTML);
console.log(myElement.textContent);

//Change Attribut Directly:

myElement.innerHTML = "Text From <span> Main.JS </span> File";
myElement.textContent = "Text From <span> Main.JS </span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Aleructe";
document.images[0].title = "Pictuer";
document.images[0].id = "pic";
document.images[0].className = "img";

//Change Attribute With Methods:Get&Set

let mylink = document.querySelector(".link");

//GetAttribute
console.log(mylink.getAttribute("class"));
console.log(mylink.getAttribute("href"));

//SetAttribute
mylink.setAttribute("href", "###");
mylink.setAttribute("title", "google websit");
