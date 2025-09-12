let myFriends = ["Ahmed", "Mhamed", "Sayed", "Alaa"];

console.log(myFriends);

//unshift
myFriends.unshift("Baraa", "Osama");
console.log(myFriends); //(6) ['Baraa', 'Osama', 'Ahmed', 'Mhamed', 'Sayed', 'Alaa'] Adding elemnts to array stared wiht First index & dosn't delet any elemnts in the array

//push
myFriends.push("samah", "Eman");
console.log(myFriends); //(8) ['Baraa', 'Osama', 'Ahmed', 'Mhamed', 'Sayed', 'Alaa', 'samah', 'Eman'] , Adding elemnts to array but he started with lest index

//shift
myFriends.shift();
console.log(myFriends); //He update the array and remov a first elemnt in the array

let first = myFriends.shift();
console.log(`first Name is ${first}`); //this ouput is a Frst elemnt on the array

//Pop

myFriends.pop(); //is work same shift but he stared with lest index
console.log(myFriends);
let Lest = myFriends.pop();
console.log(`Lest Name is ${Lest}`);
