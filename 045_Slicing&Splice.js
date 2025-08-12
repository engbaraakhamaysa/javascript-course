let myArr = ["Baraa", "Ahmed", "Sayed", "Ail", "Osama"];

//Slice : he need a start and end , dufult start to First and end to Lest array , can start Revers array
console.log(myArr);
console.log(myArr.slice());
console.log(myArr.slice(1));
console.log(myArr.slice(1, 3));
console.log(myArr.slice(-3));
console.log(myArr.slice(1, -2));
console.log(myArr.slice(-4, -2));
console.log(myArr);

//Splice: (ValueStart,Value Remov based to Value Start,Elemntes Add in araay)
myArr.splice(0, 0, "Baraa", "Sobhi");
console.log(myArr);
myArr = ["Baraa", "Ahmed", "Sayed", "Ail", "Osama"];
myArr.splice(1, 0, "Baraa", "khamaysa");
console.log(myArr);
myArr = ["Mohamed", "Ahmed", "Sayed", "Ail", "Osama"];
myArr.splice(1, 1, "Baraa", "khamaysa");
console.log(myArr);
