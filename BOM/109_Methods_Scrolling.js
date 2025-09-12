let myNewWindow = window.open("https://google.com", "", "height=400,width=400");
myNewWindow.focus();
myNewWindow.close();

//in Console:
window.scrollTo(500, 200);
window.scrollBy(500, 200);

window.scrollTo({
  left: 1500,
  top: 1200,
  behavior: "smooth",
});

/*

    <style>
      body {
        height: 5000px;
        width: 5000px;
      }
    </style>
 */
