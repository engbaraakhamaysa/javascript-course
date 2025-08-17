//Ex1
//this function have to variable is required age & userName
function sayHello(userName, age) {
  if (age < 20) {
    console.log("App is Not Suitable For you");
  } else {
    console.log(`Hello ${userName}`);
  }
}

sayHello("Baraa", 25);
sayHello("baraa", 19);

//Ex2

function generateYser(start, end, exelude) {
  for (let i = start; i <= end; i++) {
    if (i === exelude) {
      continue; //Here does not print the year exclude
    }
    console.log(i); // print the year butween start & end
  }
}

generateYser(2000, 2025, 2006); //this have a 3 valus required
