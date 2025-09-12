/* 

Promise Training

We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees

.then(We Will Chosse Tow People)
.then(We Will Test Them Then Get One Of Them)
.catch(NO One Came)

them => Promise Is Successfull Use The Resolved Data
Catch => Promise Is Failed, Catch The Error
Finally => Promise Successfull Or Failed Finally Do Somethiing


*/
const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["Osama", "Mahmoud"];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4")); // Try Reomve Error
  }
});
myPromise
  .then((resolveValue) => {
    resolveValue.length = 2;
    console.log(resolveValue);
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    console.log(resolveValue);
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`THe Choosen Emplyee is ${resolveValue}`);
  })
  .catch((rejectReason) => console.log(rejectReason))
  .finally(console.log("The Operation Is Done"));
