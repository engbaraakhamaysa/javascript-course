//116 Desturucuring Array part2
let myFrindes = [
  "Ahmend",
  "Ali",
  "Sayed",
  ["Shady", "Amr", ["Baraa", "Mohamed"]],
];

// console.log(myFrindes[3][2][1]); //Mohamed

let [, , , [a, , [, b]]] = myFrindes;
console.log(`${a} ${b}`);

//117 Desturucuring Swap

let book = "Video";
let video = "Book";

let stash = book;
book = video;
video = stash;

console.log(`Book:${book} Vidoe:${stash}`);

//To Solving This With Desturucuring:
[book, video] = [video, book];
console.log(book);
console.log(video);
