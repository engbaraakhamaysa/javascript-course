window.localStorage.setItem("color", "red");
window.sessionStorage.setItem("color", "red");

document.querySelector(".name").onblur = function () {
  //   console.log(this.value);
  window.localStorage.setItem("input-name", this.value);
  window.sessionStorage.setItem("input-name", this.value);
};
