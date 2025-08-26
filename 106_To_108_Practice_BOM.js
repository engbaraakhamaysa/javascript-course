//106: Window Location Object:
console.log(location);
location.href = "https://google.com";
console.log(location.host); //127.0.0.1:5500
console.log(location.hostname); //127.0.0.1
console.log(location.protocol); //http:

console.log(location.hash);
window.location.reload();
location.replace("https://elzero.org");
location.assign("https://google.com");
window.close();

//Ex 107:Window open & Close:

setTimeout(function () {
  window.open("https://google.com", "_blank", "height=400,width=400");
}, 2000);

// 108: Window History Object:

console.log(history);
console.log(history.length);
console.log(history.back());
console.log(history.forward());
history.go(-1);
