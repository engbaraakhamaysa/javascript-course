/* 

Call Stack || Stack Trace
-- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
-- Mechanism To Make The Interpreter Track Your Calls
-- When Function Called It Added To THe Stack
-- When Function Executed It Removed From The Stack
-- After Function Is Finsished Executing The Interpreter Continue Fron The Last Point
-- Work Using LIFO Principle => Last In First Out
-- Code Execution Is Synchronous
-- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

Web API
-- Methods Available From The Environment => Browser

*/

//This code synchronous

setTimeout(() => {
  console.log("Web API");
}, 0); // this Wite to Romve all instrction in the (Stack) & He Word

function one() {
  console.log("One");
}

function tow() {
  one();
  console.log("Two");
}

function three() {
  tow();
  console.log("Three");
}

three();

/*
LIFO (Stak)
====================================
function one() {
    console.log("One");
}
====================================
function tow() {
    one();
    console.log("Two");
}
====================================
function three() {
    tow();
    console.log("Three");
}
====================================

*/
console.log("LIFO___________________");

console.log("One");
console.log("Tow");
console.log("Three");
