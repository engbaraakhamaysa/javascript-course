let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2; // can updeat and chingin the data in the age about anyther Objec about only Locle Object
    //return user.age * 2;//this allowed to user only not changing in the function to can change you need changin [user] to [this]
  },
};

console.log(user);

console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});

obj.a = 100;
console.log(obj);

let copyObj = Object.create(user);

copyObj.age = 30;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
