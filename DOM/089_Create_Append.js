//CreatElement,CreatComment,CreatTextNode,CreatAttribute,AppendChild:

let myElement = document.createElement("div"); //Cret Element Div
let myAttr = document.createAttribute("data-custom"); //Creat Attribut
let myText = document.createTextNode("Proudct one"); //Creat Text Node
let myComment = document.createComment("This is Div"); //Creat Comment
let myH1 = document.createElement("h1");
//set className
myElement.className = "Product";

myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing"); //Can Set Attribute in this is a Way

//Append Cooment to Element:
myElement.appendChild(myComment);

//Append Text to Element
myElement.appendChild(myText);

myH1.textContent = "Hello H1"; //can set text in this is a Way

myElement.appendChild(myH1); //here the h1 is Child div

document.body.appendChild(myElement); //here the div Child body

console.log(myElement);
