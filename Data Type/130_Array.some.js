//Example1:
let nums = [1, 2, 3, 4, 5, 6, 7, 10];
let cheek = nums.some(function (e) {
  console.log(e);
  return e > 10; //any element cheek is true return true and stop but he serch for all elment dont cructle condition is rtruern false
});
console.log(cheek);

//Example2 user this wiht some ceek the elment:
let myNumber = 11;
let cheek1 = nums.some(function (e) {
  console.log(this);
  return e > this;
}, myNumber);
console.log(cheek1);

//Examples3 find thte elmeltn with some:
function cheekValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(cheekValues(nums, 3));

//Examples Reang 10 to 20 with some:
let range = { min: 10, max: 20 }; //Obj Reange
let cheekRange = nums.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);

console.log(cheekRange);
