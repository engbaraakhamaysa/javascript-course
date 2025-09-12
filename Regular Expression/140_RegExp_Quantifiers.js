let emails = "o@nn.sa Baraa@gmail.com Osama@gmail.net";
// n+ => one or More
let emailsRe = /\w+@\w+.(com|net)/gi;
console.log(emails.match(emailsRe)); //(2) ['Baraa@gmail.com', 'Osama@gmail.net']
emailsRe = /\w+@\w+.\w+/gi;
console.log(emails.match(emailsRe)); //(3) ['o@nn.sa', 'Baraa@gmail.com', 'Osama@gmail.net']

let nums = "0110 10 150 05120 0560 350 00";
let numsRe = /0\d+0/gi;
console.log(nums.match(numsRe));
// n* => zero or More
numsRe = /0\d*0/gi;
console.log(nums.match(numsRe));

// n? => Zero or One

let urls = "https://google.com http://www.website.net web.com";

let urlsRe = /https/gi;
console.log(urls.match(urlsRe));

urlsRe = /https?/gi;
console.log(urls.match(urlsRe));

urlsRe = /https?:\/\//gi;
console.log(urls.match(urlsRe));

urlsRe = /https?:\/\/(www.)?/gi;
console.log(urls.match(urlsRe));

urlsRe = /https?:\/\/(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));
