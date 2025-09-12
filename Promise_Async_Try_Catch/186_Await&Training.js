/* 

Await
--- Await Works Only Inside Asnyc Funcions
--- Await Make JavaScript Wait For The Promise Result
--- Await Is More Elegant Syntax Of Getting Promise Result

*/

const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    //res("I AM The Good Promise")
    rej(Error("I am The Good Promise")); //try res
  }, 3000);
});

async function readData() {
  console.log("Before Promise");
  //   myPromise.then((res) => console.log(res)); Try This He Print The "After Promise"
  //console.log(await myPromise)
  console.log(await myPromise.catch((err) => err));
  console.log("After Promise");
}

readData();
