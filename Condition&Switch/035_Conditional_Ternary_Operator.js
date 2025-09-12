let theName = "baraa";
let theGender = "Male";
let theAge = 50;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console("Mrs");
}

//Condition ? if True : if False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.writeln(result);
console.log(`Hello ${result} ${theName}`);

//

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("Larger Then 60")
  : console.log("Unknown");
