/*
Promis Intro And Syntax
 - Promise In JavaScriopt Is Like Promis In Real Life
 - Promise Is Somehting That Will Happen In The Future
 - Promise Avoid Callback Hell 
 - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resultiong Value
 

 - Promise Status
 --- Panding : Initial State
 --- Fulfilled: Completed Successfully
 --- Rejected: Failed

 Story
 - Once A Promise Has Been Called, It Will Start In A Pending State
 - The Created Promise Will Eventually End In A Reesolved State Or In A Rejected State
 - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing

 - Then
 --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/
const myPromise = new Promise((resolveFunction, rejectFuction) => {
  let connect = true; // Try False
  if (connect) {
    resolveFunction("Connecton Established");
  } else {
    rejectFuction(Error("Connection Failed"));
  }
}).then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

console.log(myPromise);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);
console.log(myPromise);
