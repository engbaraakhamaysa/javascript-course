let obj = {
  prop1: 1,
  method1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 1,
  method2: function () {
    return this.prop1;
  },
};

let TargetObject = {
  prop1: 1,
  prop1: 1,
};

let functionObject = Object.assign(TargetObject, obj, obj2); //he get one the prop to same prop to another Object for ex : prop 1 in the obj & popo1 in the TargetObject he chooses the first
functionObject.prop1 = 200;
functionObject.prop2 = 4;

console.log(functionObject);

//Cann Creat a null TargetObject
let newObject = Object.assign({}, obj, { prop5: 5, prop6: 6 });

console.log(newObject);
