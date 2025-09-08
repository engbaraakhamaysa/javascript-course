/* 
JSON
-JSON.parse => Convert Text Data To JS Object
-JSON.stringify => Convert JS Object To JSON

*/

const myJsonObjectFromServer = '{"Username": "Baraa","Age":24}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

myJsObject["Username"] = "Baraa Khamaysa";
myJsObject["Age"] = "25";

const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);
