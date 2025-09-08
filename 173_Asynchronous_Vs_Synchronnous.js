/* 

To Understand Ajax , Fetch , Promises

Asynchronous Vs Synchronous Programming
-Meaning

Synchronous
-Operations Runs in Sequence
-Eath Operation Must Wait For The Previous One To Complete
-Story From Real Life

Asynchronous
-Operations Runs In Parallel
-This Means That An Operation Can Occur While Another One Is Still Being Processed
-Story From Real Life


Search:
-JavaScript Is A Single-Threaded : Yes JS is Single 
-Multi Threaed Languages


*/

//Synchronous
console.log("1");
console.log("2");
window.alert("Operation");
console.log("3");

//Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 4000);
console.log("3");
