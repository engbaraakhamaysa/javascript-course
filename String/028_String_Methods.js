let title = "Elzero web School";

//indexof
console.log(title.indexOf("web")); // numbeer of index is 6
console.log(title.indexOf("web", 8)); // null web from 8 to end return zero

//lestIndexOf

console.log(title.lastIndexOf("web")); // 6 but he start ot 16
console.log(title.lastIndexOf("o")); //15
console.log(title.indexOf("o")); //5

//Slice

console.log(title.slice(0)); //Elzero web School
console.log(title.slice(2, 8)); //start index 2 he is z to index 8 he is w
console.log(title.slice(-5)); // can get negative number and he start with to lest index 16 - 5 start to end
console.log(title.slice(-5, -3)); // ch
console.log(title.slice(12, 14));

//repeat
console.log(title.repeat(6)); // print title 6 Times

//Split

console.log(title.split()); //he split title is array for all words
console.log(title.split(" ")); //He split with space to array ["Elzero" , "web" , "School"]
console.log(title.split("o", 2));
console.log(title.split("o", 3));
console.log(title.split("o", 4));
