/* 

Promise
-- All 
-- All Settled
-- Race

*/

const myFirstProise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I Am The First Promise");
  }, 5000);
});

const mySecondProise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("I Am The Second Promise");
  }, 1000);
});

const myThirdProise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("I Am The Third Promise");
  }, 2000);
});

//Print All if The is Resolved All else One is Rej He Print The Rej
Promise.all([myFirstProise, mySecondProise, myThirdProise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected ${rejectedValue}`)
);

//Print All Rejected & Resolved
Promise.allSettled([myFirstProise, mySecondProise, myThirdProise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected ${rejectedValue}`)
);

//Time is Short He Print First
Promise.race([myFirstProise, mySecondProise, myThirdProise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected ${rejectedValue}`)
);
