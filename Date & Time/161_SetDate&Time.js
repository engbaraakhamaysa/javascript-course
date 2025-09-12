/* 
 
 Date And Time 
 -setTime(Milliseconds)
 -setDate() => Day of Month [Negative & Positive]
 -setFullYear(year, month => Optionsal [0-11] , dat => Optional [1 - 31])
 -setMonth(Month[0-11] , Day => Opthional) [Neagativ & Positive]
 -setHours(Hours [0-23], Minutes => Optional)
 -setMinutes(Minutes [0-59])
 -setSeconds(Seconds => [0-59])

 
 */

let dateNow = new Date();
console.log(dateNow);

console.log("#".repeat(66));

dateNow.setTime(0);
console.log(dateNow);

console.log("#".repeat(66));

dateNow.setTime(10000);
console.log(dateNow);

console.log("#".repeat(66));

dateNow.setDate(80); // can set any number of Days or Negative or Positver
console.log(dateNow);

console.log("#".repeat(66));

dateNow.setFullYear(2024, 1); //try month 24 of 30
console.log(dateNow);

console.log("#".repeat(66));

dateNow.setMonth(-60);
console.log(dateNow);
