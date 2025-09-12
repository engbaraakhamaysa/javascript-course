document.links[0].onclick = function (e) {
  console.log(e);
  e.preventDefault(); //stops the browser's default action for an event (like stopping a form from submitting or a link from navigating).
};

let userInput = document.querySelector("[name = 'username']");
let ageInput = document.querySelector("[name = 'age']");

document.forms[0].onsubmit = function (event) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

/*

  <body>
    <form action="">
      <input type="text" name="username" placeholder="Ma 10 Chracter onley" />
      <input type="text" name="age" placeholder="Can Be Empty" />
      <input type="submit" value="Submit Data" />
    </form>
    <a href="https://google.com">google</a>

    <script src="093_Validate_From.js"></script>
  </body>

*/
