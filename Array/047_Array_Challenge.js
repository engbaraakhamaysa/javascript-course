let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log(my);

//Q1: Print ["Osama","Elham","Mazero","Ahmed"] only numbre zero , counter.

console.log("Q1:");
let Q1 = my.slice(zero, counter).reverse();
Q1.unshift("Osama");
console.log(Q1);

//Q2:print ["Elham","Mazero"] onle use zero & counter.

console.log("Q2:");
let Q2 = my.slice(zero, counter).reverse();
Q2.pop();
console.log(Q2);

//Q3:Pirint "Elzero".

console.log("Q3:");
let Q3 = my;
Q3 = Q3.sort().reverse();
Q3.pop();
let S1 = Q3[counter].split("");
S1.pop();
S1.pop();
S1.pop();
Q3.shift();
let S2 = Q3[zero].split("");
S2.shift();
S2.shift();
console.log(S1.concat(S2).join(""));

//Q4:Use array my to print  rO.

my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log("Q4:");
let Q4 = my.reverse();
Q4.pop();
Q4.shift();
n = Q4[counter];
let n2 = Q4;
n2 = Q4[counter];
Q4.shift();
n2 = Q4[zero];
n = n.split("M");
n = n.pop();
n = n[counter];
n2 = n2.split("s");
n2 = n2[zero];
console.log(n + n2);
