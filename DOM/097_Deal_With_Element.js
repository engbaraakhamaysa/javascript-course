let element = document.getElementById("my-div");
let myP = document.createElement("p");

element.before(myP); //before div
element.after(myP); //after div
element.prepend(myP); //first elment inside div
element.append(myP); //lest elemnet inside div

element.remove();

/*
  <body>
    <div id="my-div">Div <span>Span</span></div>
    <script src="097_Deal_With_Element.js"></script>
  </body>
 */
