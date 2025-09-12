let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Baraa", age: 25, available: true, skills: ["java", "php"] },
  { title: "Ahmed", age: 39, available: false, skills: ["php", "Laravel"] },
];

if (chosen === 1) {
  let [a1, ,] = myFriends;
  const {
    title,
    age,
    available,
    skills: [, s],
  } = a1;
  console.log(title);
  console.log(age);
  console.log(available === true ? "Available" : "Not Available");
  console.log(s);
} else if (chosen === 2) {
  let [, a1] = myFriends;
  const {
    title,
    age,
    available,
    skills: [, s],
  } = a1;
  console.log(title);
  console.log(age);
  console.log(available === true ? "Available" : "Not Available");
  console.log(s);
} else if (chosen === 3) {
  let [, , a1] = myFriends;
  const {
    title,
    age,
    available,
    skills: [, s],
  } = a1;
  console.log(title);
  console.log(age);
  console.log(available === true ? "Available" : "Not Available");
  console.log(s);
}
