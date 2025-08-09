let title = "Elzero web School";

//substring

console.log(title.substring()); // Elzero web school
console.log(title.substring(2)); //zero web school
console.log(title.substring(2, 6)); //zero
console.log(title.substring(6, 2)); //zero
console.log(title.substring(title.length - 1)); // l
console.log(title.substring(title.length - 5, title.length - 3)); //ch

//Substr

console.log(title.substr()); // Elzeor wev school
console.log(title.substr(1, 8)); // lzero we
console.log(title.substr(-3)); // ool
console.log(title.substr(-5, 2)); //ch

//includes

console.log(title.includes("web")); //true
console.log(title.includes("web", 8)); // 8 is start serching // false

//Startswith
console.log(title.startsWith("E")); //true
console.log(title.startsWith("E", 2)); //false
console.log(title.startsWith("z", 2)); // true

//EndsWith

console.log(title.endsWith("o")); //false
console.log(title.endsWith("o", 6)); //true
console.log(title.endsWith("ro", 6)); //true
