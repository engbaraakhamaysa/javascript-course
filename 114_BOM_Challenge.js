let input = document.querySelector("form input");
let button = document.querySelector("form button");
let tasks = [];
if (window.localStorage.getItem("tasks")) {
  tasks = tasks.concat(JSON.parse(window.localStorage.tasks));
  tasks.forEach((e) => {
    let title = document.createElement("p");
    title.innerHTML = e;
    let del = document.createElement("span");
    del.innerHTML = "Delete";
    let task = document.createElement("div");
    task.append(title);
    task.append(del);
    document.querySelector(".tasks").append(task);
    del.addEventListener("click", (e) => {
      tasks = tasks.filter(
        (element) =>
          element !== `${e.currentTarget.previousElementSibling.innerHTML}`
      );
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      e.currentTarget.parentElement.remove();
    });
  });
}
document.forms[0].onsubmit = function (event) {
  event.preventDefault();
};
button.addEventListener("click", (e) => {
  if (input.value == "") {
    return;
  } else {
    tasks = tasks.concat(input.value);
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    let title = document.createElement("p");
    title.innerHTML = input.value;
    let del = document.createElement("span");
    del.innerHTML = "Delete";
    let task = document.createElement("div");
    task.append(title);
    task.append(del);
    document.querySelector(".tasks").append(task);
    del.addEventListener("click", (e) => {
      console.log(e.currentTarget.previousElementSibling.innerHTML);
      tasks = tasks.filter(
        (element) =>
          element !== `${e.currentTarget.previousElementSibling.innerHTML}`
      );
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      e.currentTarget.parentElement.remove();
    });
  }
});
