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

const {
  theName,
  theAge,
  theColor,
  skills,
  skills: { html, css },
} = user;

console.log(theName, theAge, theColor, skills, html, css);

const {
  theName: n,
  skills: s,
  skills: { html: h, css: cs },
} = user;

console.log(n, s, h, cs);
