/* 

Promise & XHR

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/engbaraakhamaysa/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);

    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};


*/

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
