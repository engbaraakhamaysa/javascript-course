var a = 1;
let b = 2;

function ShowText() {
  //if not here a & b in local he serching to Gloabal
  var a = 10;
  let b = 20;

  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Gloabal ${a}`);
console.log(`From Gloabal ${b}`);

ShowText();
