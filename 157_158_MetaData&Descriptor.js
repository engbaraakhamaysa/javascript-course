const myObj = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObj, {
  c: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 3,
  },
});
console.log(myObj);

myObj.c = 100;
console.log(myObj);

for (let prop in myObj) {
  console.log(prop, myObj[prop]);
}

console.log(delete myObj.c);
console.log(myObj);

Object.defineProperties(myObj, {
  e: {
    configurable: true,
    value: 5,
  },
  c: {
    configurable: true,
    value: 6,
  },
});

console.log(myObj);

console.log(Object.getOwnPropertyDescriptor(myObj, "e"));
console.log(Object.getOwnPropertyDescriptors(myObj));
