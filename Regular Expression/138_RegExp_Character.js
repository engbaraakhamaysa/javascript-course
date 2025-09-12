let email = "o@@@g...com o@g.com o@g.net A@%com o.g.com o@s.org l@lcom";

let dot = /./g;
console.log(email.match(dot));
let word = /\w/g;
console.log(email.match(word));
let valid = /\w@\w.(com|net)/g;
console.log(email.match(valid));
