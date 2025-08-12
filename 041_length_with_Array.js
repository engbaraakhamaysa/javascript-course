let myFriends = ["Ahmed", "Baraa", "Mohamed", ["Bhaa", "Ail"]];
console.log(myFriends.length); //4

myFriends[3] = "Gamal";
console.log(myFriends); //(4) ['Ahmed', Array(2), 'Mohamed', 'Gamal']
myFriends[7] = "Gamal";
console.log(myFriends); //(8) ['Ahmed', Array(2), 'Mohamed', 'Gamal', empty × 3, 'Gamal']

myFriends[myFriends.length] = "Baraa";
console.log(myFriends); //(9) ['Ahmed', Array(2), 'Mohamed', 'Gamal', empty × 3, 'Gamal', 'Baraa']
myFriends[myFriends.length - 1] = "Khamaysa";
console.log(myFriends); //(9) ['Ahmed', Array(2), 'Mohamed', 'Gamal', empty × 3, 'Gamal', 'Khamaysa']

console.log(myFriends);
myFriends.length = 2;

console.log(myFriends); //(2) ['Ahmed', Array(2)]
