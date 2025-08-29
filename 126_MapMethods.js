//Methods: set , get , delete , clear , has.

//Properts: Size.

let myMap = new Map([
    [10, "Number"],
    ["Name", "String"],
    [false, "Boolean"]
]);
myMap.set(11, "Numbers");
myMap.set("String", "BAraa");

console.log(myMap);


console.log(myMap.has(false));

console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log(myMap.size);

console.log(myMap.delete("Name"));
console.log(myMap.delete(false));

myMap.clear()
console.log(myMap.size)

