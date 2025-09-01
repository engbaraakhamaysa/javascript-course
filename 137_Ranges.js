//[a-z],[^a,z],[A,Z],[^A,Z],[abc],[^abc]
let myString = "AaBbcdefG123!234%^&*";

let small = /[a-z]/g;
console.log(myString.match(small));
let notSmall = /[^a-z]/g;
console.log(myString.match(notSmall));
let capital = /[A-Z]/g;
console.log(myString.match(capital));
let notCapital = /[^A-Z]/g;
console.log(myString.match(notCapital));
let abc = /[abed]/g;
console.log(myString.match(abc));
let notAbc = /[^abed]/g;
console.log(myString.match(notAbc));
let smallCapital = /[a-zA-Z]/g;
console.log(myString.match(smallCapital));
let notSmallCapital = /[^a-zA-Z]/g;
console.log(myString.match(notSmallCapital));
let specials = /[^a-zA-Z0-9]/g; //only specials chractreris
console.log(myString.match(specials));
let specials2 = /[^a-z^A-Z0-9]/g; // this remov ^
console.log(myString.match(specials2));
