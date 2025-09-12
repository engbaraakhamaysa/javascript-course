let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  //if there is color in localstorage.

  //1-Add ColOr To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");

  //2-Remove Active Class From AllList
  lis.forEach((li) => {
    li.classList.remove("active");
  });

  //3-Add Acive class to current color
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  //in click the color
  li.addEventListener("click", (e) => {
    //remov for all li acrive
    lis.forEach((li) => li.classList.remove("active"));
    //add active to li is clicked
    e.currentTarget.classList.add("active");
    //save the color in the localstorage.
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    //set color to div
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

//html & Css
/*

    <title>Document</title>
    <style>
      body {
        background: #eee;
      }
      ul {
        padding: 0;
        margin: 0;
        background-color: #ddd;
        margin: 20px auto;
        padding: 20px;
        width: 400px;
        list-style: none;
        display: flex;
        justify-content: space-between;
      }

      ul li {
        width: 60px;
        height: 60px;
        border: 2px solid transparent;
        opacity: 0.4;
        cursor: pointer;
        transition: 0.3s;
      }

      ul li.active,
      ul li:hover {
        opacity: 1;
      }

      ul li:first-child {
        background-color: red;
      }
      ul li:nth-child(2) {
        background-color: green;
      }
      ul li:nth-child(3) {
        background-color: blue;
      }
      ul li:nth-child(4) {
        background-color: black;
      }

      .experiment {
        background-color: red;
        width: 600px;
        height: 300px;
        margin: 20px auto;
      }
    </style>
  </head>
  <body>
    <ul>
      <li class="active" data-color="red"></li>
      <li data-color="green"></li>
      <li data-color="blue"></li>
      <li data-color="black"></li>
    </ul>
    <div class="experiment"></div>
    <script src="112_LocalStorage_Practice.js"></script>
  </body>

*/
