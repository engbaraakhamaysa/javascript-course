const user = {
  theName: "Baraa",
  theAge: 25,
  skills: ["html", "css", "javaScript"],
  addresses: {
    egypte: "cairo",
    palestine: "jinen",
  },
};

const {
  theName: n,
  skills: [one, tow, three],
  skills,
  addresses: { palestine: ps },
} = user;

console.log(n, tow, one, three, ps, skills);
