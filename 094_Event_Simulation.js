let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[0].click();
};

/*
  <body>
    <form action="">
      <input type="text" class="one" />
      <input type="text" class="two" />
      <input type="submit" value="Submit Data" />
    </form>
    <a href="https://google.com" target="_blank">google</a>

    <script src="094_Event_Simulation.js"></script>
  </body>
*/
