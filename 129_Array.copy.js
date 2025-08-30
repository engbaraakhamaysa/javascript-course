//EX

let myArray = [10, 20, 30, 40, 50, "A", "B"];
myArray.copyWithin(3);
console.log(myArray);

myArray = [10, 20, 30, 40, 50, "A", "B"];
myArray.copyWithin(4, 6);
console.log(myArray);

myArray = [10, 20, 30, 40, 50, "A", "B"];
myArray.copyWithin(4, -1);
console.log(myArray);

myArray = [10, 20, 30, 40, 50, "A", "B"];
myArray.copyWithin(1, -2, -1); //target = index =1 ; start = -2 ; end = -1
console.log(myArray);

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(2);
console.log(arr);

arr = [10, 20, 30, 40, 50];
arr.copyWithin(0, 3);
console.log(arr);

arr = ["A", "B", "C", "D", "E"];
arr.copyWithin(1, 2, 4);
console.log(arr);

arr = [100, 200, 300, 400, 500];
arr.copyWithin(-3, 0, 2);
console.log(arr);

arr = [5, 10, 15, 20, 25, 30];
arr.copyWithin(2, -2);
console.log(arr);
