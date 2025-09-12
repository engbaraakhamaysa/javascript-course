let myP1 = document.querySelector("p").cloneNode(false);
let myP2 = document.querySelector("p").cloneNode(true);

console.log(myP1); //coping elemnt only
console.log(myP2); //coping elemnt and value

let myDiv = document.querySelector("div");

myP1.id = `${myP1.id}-Clone`; //this is a copy for p in the body

myDiv.appendChild(myP1); //insert the myP1 copy to inside div

/*

  <body>
    <p id="my-p" class="my-p">this is <span>P</span></p>
    <div>Div</div>
    <script src="099_DOM_Cloning.js"></script>
  </body>
 */
