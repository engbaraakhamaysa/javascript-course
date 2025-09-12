let myString = "Hello Elzero web school I love elzero";

let regEx = /Elzero/;
console.log(myString.match(regEx));
regEx = /elzero/;
console.log(myString.match(regEx));
regEx = /elzero/i; //Captil or small
console.log(myString.match(regEx));
regEx = /elzero/gi; //g : all String
console.log(myString.match(regEx));

let tld = "Com Net Info Org Code Io";
let tldRe = /(org|info)/gi;
console.log(tld.match(tldRe));

//[0-9] Reange Number ^ not
let nums = "012345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe)); //(5) ['0', '1', '2', '1', '0']
numsRe = /[^0-2]/g;
console.log(nums.match(numsRe));

let specialNumbers = "1!2@3#4$5%678910";
let specialNumbersRe = /[^0-9]/g;
console.log(specialNumbers.match(specialNumbersRe)); //(5) ['!', '@', '#', '$', '%']

let str = "Os1 Os1os Os8 OS8OS";
let strRe = /OS[5-9]OS/g;
console.log(str.match(strRe));
