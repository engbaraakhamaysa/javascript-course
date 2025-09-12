/* 

 Fetch APi
 - Return A Representation Of The Entire HTTP Response


 const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };
    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/engbaraakhamaysa/repos")
  .then((result) => {
    result.length = 2;
    console.log(result);
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));
 */

fetch("https://api.github.com/users/engbaraakhamaysa/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((data) => {
    data.length = 2;
    console.log(data);
    return data;
  })
  .then((myData) => console.log(myData[0].name));
