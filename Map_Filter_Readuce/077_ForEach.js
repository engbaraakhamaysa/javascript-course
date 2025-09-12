/*
    <ul>
      <li class="active">One</li>
      <li>Tow</li>
      <li>Three</li>
    </ul>

    <div class="contant">
      <div>Div One</div>
      <div>Div Two</div>
      <div>Div Three</div>
    </div>
 */

let allList = document.querySelectorAll("ul li"); //get all ul & li in body

let allDivs = document.querySelectorAll(".contant div");

console.log(allList);
console.log(allDivs);

allList.forEach(function (element) {
  console.log(element.innerHTML);
});
allList.forEach(function (element) {
  return element; //don't return anything b.c he changing to attribute the html & css
});

allList.forEach(function (element) {
  element.onclick = function () {
    //Remove Active Class From All Elements
    allList.forEach(function (ele) {
      ele.classList.remove("active");
    });
    //Add Active Class From Elemnet
    this.classList.add("active");

    //Hede All Divs
    allDivs.forEach(function (el) {
      el.style.display = "none";
    });
  };
});
