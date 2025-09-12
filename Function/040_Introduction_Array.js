let myFriends = ["Ahmed", "Baraa", "Mohamed", ["Bhaa", "Ail"]];

console.log(`Hello ${myFriends[0]}`); // Hello Ahmed
console.log(`Hello ${myFriends[1]}`); // Hello Baraa
console.log(myFriends[1][2]); // r
console.log(myFriends[2][1]); // o
console.log(myFriends[3][1][2]); //l

console.log(myFriends); //(4) ['Ahmed', 'Baraa', 'Mohamed', Array(2)] does not changing anything on the array

myFriends[1] = "Gamal";
console.log(myFriends); //(4) ['Ahmed', 'Gamal', 'Mohamed', Array(2)]
myFriends[1] = ["Sobhi", "Adhem"];
console.log(myFriends); //(4) ['Ahmed', Array(2), 'Mohamed', Array(2)]

console.log(typeof myFriends); //Object

console.log(Array.isArray(myFriends)); //true
