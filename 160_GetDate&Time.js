/*

Date And Time 

getTime() => Number OF Milliseconds
getDate() => Day of The Month 
getFullYear()
getMonth() => Zero Based 
gertDay() => Day Of The Week
getHours()
getMinutes()
getSeconds()

*/

let dateNow = new Date();
let birthday = new Date("2000, 5, 16");
let dateDiff = dateNow - birthday;
console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow);

console.log(dateNow.getTime());
console.log(dateNow.getDate()); // Number of Day on the Month

console.log(dateNow.getFullYear()); // Copy Rite

console.log(dateNow.getMonth()); //Number of Index start 0 end 11

console.log(dateNow.getDay());
console.log(dateNow.getHours());
