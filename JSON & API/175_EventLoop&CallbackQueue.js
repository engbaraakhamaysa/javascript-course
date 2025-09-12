/* 

Evetn loop + Callback Queue

Story 
- JavaScript Is Single Threded Language "All Operations Executed in Single Thread"
- Call Stak Track All Calls
- Every Function Is Done Its Poped Out 
- When You Call Asynchronous Function Is Sent To Browser API
- Asynchronous Function Like Settimout Start Its Own Thread 
- Browser API Act As A Second Thread
- API Finish Waiting And Send Back The Funcion For Processing 
- Browser API Add The Callback To Callback Queue
- Event Loop Wait For Call Stack To Be Empty
- Event Loop Get Callback From Callback Queue And Add It To Call Stack
- Callback Queue Follow FIFO "First In First Out" Rul

*/

//Ex:1
console.log("One");
setTimeout(() => {
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

//Ex:2

setTimeout(() => {
  console.log(myVar);
}, 0);
let myVar = 100;
myVar += 100;

/*
Note:
-- All Functions you call immediatly => Go to The Call Stack => Synchronous
-- Asynchronous Functions => Go To The Web API => Wait in the Queue => Return to Stack Late
-- Return the Stack To Be Stack is Empty he finesed all callback fuctions
 */
