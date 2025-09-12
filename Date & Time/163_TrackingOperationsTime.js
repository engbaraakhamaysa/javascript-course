/* 

Date And Time 
-Trck Operations Time

Search 
-Performance.now()
-Performance.mark()

*/

//Start Time
let start = new Date();

//Opration
for (let i = 0; i < 10000; i++) {
  //   document.writeln(`<div>${i}</div>`);
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}
//Time End
let end = new Date();

//Operation Duration
let duration = end - start;

console.log(duration);
