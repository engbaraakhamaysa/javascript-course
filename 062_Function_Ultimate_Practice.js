function showInfo(
  user = "Unknown",
  age = "Unknown",
  rate = 0,
  show = "Yes",
  ...skills
) {
  document.writeln(`<div>`);
  document.writeln(`<h2> Welcome ${user} </h2>`);
  document.writeln(`<p> Age : ${age} </p>`);
  document.writeln(`<p> Hour Rate : ${rate} </p>`);
  if (show === "Yes") {
    if (skills.length > 0) {
      document.writeln(`<p> Skills : ${skills.join(" | ")} </p>`);
    } else {
      document.writeln(`<p> Skills: NO Skills </p>`);
    }
  } else {
    document.writeln(`<p> Skills is Hiddene </p>`);
  }
  document.writeln(`</div>`);
}

showInfo("Baraa", 25, 20, "Yes", "Html", "Css");
