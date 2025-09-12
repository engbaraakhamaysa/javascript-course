let x = 10; // in this is a Globle Copay
// var x = 10;

if (x === 10) {
  //var x = 50; in this Overloading b.c he Changing the value in Global X
  let x = 60; //Not Overloaded & this is a Local Copy in the Scope
  console.log(`From if Block ${x}`);
}

console.log(`From Globale ${x}`);
