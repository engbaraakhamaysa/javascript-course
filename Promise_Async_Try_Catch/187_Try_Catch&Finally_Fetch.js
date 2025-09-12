/* 


Async & Await With Try, Catch , Finally

*/

//Example1:
const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I am good promise");
  }, 3000);
});

async function readData() {
  console.log("Before Promise");
  try {
    console.log(await myPromise);
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Promise");
  }
}

readData();

async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch(
      "https://api.github.com/users/engbaraakhamaysa/repos"
    );
    console.log(await myData.json()); // try remove await
    console.log();
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();
