let element = document.getElementById("my-div");

element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");

document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
document.styleSheets[0].cssRules[0].style.setProperty(
  "background-color",
  "red"
);

/*

main.css
div {
  font-size: 30px;
  line-height: 2;
}

index.html
    <link rel="stylesheet" href="096_CSS.css" />
  </head>
  <body>
    <div id="my-div">Div With many Classes</div>
    <script src="096_DOM_CSS.js"></script>
  </body>

 */
