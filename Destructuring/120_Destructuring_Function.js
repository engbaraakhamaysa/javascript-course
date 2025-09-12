const user = {
  theName: "Baraa",
  theAge: 39,
  theTitle: "Developar",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user);
function showDetails(obj) {
  console.log(
    obj.theName,
    obj.theAge,
    obj.theColor,
    obj.theTitle,
    obj.skills,
    obj.skills.css
  );
}

//Destructuring:
function show({ theName: n, theAge: a, skills: { css: c }, theTitle: t }) {
  console.log(n, a, c, t);
}
show(user);
