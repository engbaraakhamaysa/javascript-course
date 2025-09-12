let title = "Elzero baraa web school";

//output in title Zero
console.log(title.charAt(2).toUpperCase() + title.slice(3, 6));
//output in H 8 times with title
console.log(title.charAt(13).repeat(8));
//Return Array [Elzero]
console.log(title.split(" ", 1));
console.log(title.substr(0, 6) + title.substr(10));

console.log(title.length);
console.log(
  title.charAt(0).toLowerCase() +
    title.substring(title.indexOf[1], title.length - 1).toUpperCase() +
    title.charAt(title.length - 1).toLowerCase()
);
