/* 

Denerators
-Generator Function Run Its Code When Required.
-Generator Function Return Special Object [Generator Object]
- Generators Are  Iterable

*/

function* generateNumbers() {
  yield 1;
  alert("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
  console.log(value);
}

for (let value of generator) {
  console.log(value); // dont print anything b.c the generator in line 21 to line 26 he removed valus  he  = nell values
}
