//Map Vs WeakMap
//WeakMap Allows Garubage Cllector To Do its Task But Not Map.

//Map => key Can Be Anything.
// WeakMap => Key can Be Object only.

let objUser = { theName: "Baraa" };
let myMap = new Map();

myMap.set(objUser, "Object Value");
objUser = null;
console.log(myMap);

/*

Map(1) {{…} => 'Object Value'}
[[Entries]]
0
: 
{Object => "Object Value"}
size
: 
1
[[Prototype]]
: 
Map*/

let wObjUser = { theName: "Baraa" };
let myWeakMap = new WeakMap();

myWeakMap.set(wObjUser, "Object Value");
wObjUser = null; //override to Referernce

console.log(myWeakMap);
/**
 WeakMap {{…} => 'Object Value'}
[[Entries]]
No properties
[[Prototype]]
: 
WeakMap
 */
