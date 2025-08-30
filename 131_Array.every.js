let locations = {
  20: "Place1",
  30: "Place2",
  44: "Place3",
  40: "Place4",
};
let mainLocation = 15;

let locationArray = Object.keys(locations); //Get Keys with location Object
console.log(locationArray);

let locationArrayNumber = locationArray.map((n) => +n); // keys is string but I need Numbers
console.log(locationArrayNumber);

let cheek = locationArrayNumber.every(function (e) {
  //every : he cheek evere element is true return treu on is not true return false
  console.log(this);
  return e > this;
}, mainLocation);

console.log(cheek);
