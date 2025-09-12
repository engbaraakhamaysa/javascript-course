function calc(num1, num2) {
  return num1 + num2;

  /*
  try this  befor the ruturn
    ruturn // ptint (undefined) but if result + 100 he print the (NaN)
 */
  //this not run b.c after the return
  num1 + num2;
  1 + 1;
}

let result = calc(10, 20);

console.log(result + 100); //130

function gererate(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i === 15) {
      return `Interruptting`; //He inteerrupt to stop gererate to i = 15;
    }
  }
}

gererate(10, 20);
