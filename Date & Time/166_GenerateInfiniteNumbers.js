/* 

Generators
-Generate Infinite Numbers
-Use Return Inside Generators

*/

//Ex1:Use Return Inside Generators
function* generateNumbers() {
  yield 1;
  yield 2;
  return "A"; // Stop Generate Function
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

//Ex2:Generate Infinite Numbers
function* generateNumbers1() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

let generator1 = generateNumbers1();

console.log(generator1.next());
console.log(generator1.next());

console.log(generator1.next());
console.log(generator1.next());

console.log(generator1.next());
console.log(generator1.next());

console.log(generator1.next());
console.log(generator1.next());
