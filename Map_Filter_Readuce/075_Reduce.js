let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {
  console.log(`Accumulator => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(`####################`);
  console.log(acc + current);
  console.log(`####################`);
  return acc + current;
}, 5); //Number 5 is a inithel Vale

console.log(add);
