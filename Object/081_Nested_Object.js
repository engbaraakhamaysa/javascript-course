let user = {
  name: "Baraa",
  age: 25,
  skills: ["HTML", "CSS", "Js"],
  available: false,
  //Nested Object
  addresses: {
    ksa: "Riyedh",
    //Nested Object
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (this.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);

console.log(user.skills);
console.log(user.skills.join("  |  "));
console.log(user.skills[0]);

console.log(user.addresses.ksa);
console.log(user.addresses.egypt);
console.log(user["addresses"].egypt);
console.log(user.addresses.egypt.two);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());
