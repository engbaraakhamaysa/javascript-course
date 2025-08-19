//Q1: String [Baraa], [Ail], [Ahmed], [Osama]  => Done ! print this in on line  &  after Arrow use Rugler Functon

let names = function (...Names) {
  return `String [${Names.join("], [")}]  => Done !`;
};

console.log(names("Baraa", "Ail", "Ahmed", "Osama"));

//Use Arrow Function

let namess = (...Names) => `String [${Names.join("], [")}]  => Done !`;
console.log(namess("Baraa", "Ail", "Ahmed", "Osama"));

//Q2: use arry myNumbers = [20, 50, 10, 60] dont chinging in on line ruslt is 80

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[0];
console.log(calc(10, myNumbers[1], myNumbers[0]));

// Regular Function

let calcc = function (one, two, ...nums) {
  return one + two + nums[0];
};

console.log(calcc(10, myNumbers[1], myNumbers[0]));
