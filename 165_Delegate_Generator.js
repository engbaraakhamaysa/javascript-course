/*
Generators:
-Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums(); // try romve * he print Name only [generateNums()]
  yield* generateLetters();
  yield* [4, 5, 6]; //wit not * he print Array(3)
}

let generator = generateAll();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return()); // Stop Generator & yield
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log(generator.next());

console.log(generator.next());
