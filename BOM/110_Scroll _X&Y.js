console.log(window.scrollX === window.pageXOffset); //true

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block"; //disply the button in the y = 600
  } else {
    btn.style.display = "none";
  }
};

//go to up page

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

/* 

  <style>
    body {
      height: 5000px;
      width: 5000px;
    }
    button {
      background-color: red;
      border: none;
      color: white;
      font-weight: bold;
      padding: 6px;
      border-radius: 4px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: none;
    }
  </style>
*/
