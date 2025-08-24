//Product With Title & Descripition :

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myPrargraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myPrargraphText = document.createTextNode("Product Descripion");

//Add Heading Text
myHeading.appendChild(myHeadingText);

//Add Heading To Main Element
myMainElement.appendChild(myHeading);

//Add Pragraph Text:
myPrargraph.appendChild(myPrargraphText);

//Add Paragrath to Main Element
myMainElement.appendChild(myPrargraph);

myMainElement.className = "Product";

document.body.appendChild(myMainElement);
