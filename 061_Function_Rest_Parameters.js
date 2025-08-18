function calc(...number) {
  console.log(Array.isArray(number)); //true
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    result += number[i];
  }
  return `Final Result is ${result}`;
}

console.log(calc(10, 20, 30, 40, 50));
