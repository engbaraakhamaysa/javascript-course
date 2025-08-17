let products = ["keybords", "Mouse", "Pen", "Pad", "Mouitor"];

let colors = ["Red", "Green", "Black"];

//Break:
console.log("Break" + "-".repeat(30));

for (let i = 0; i < products.length; i++) {
  //   console.log(products[i]);
  if (products[i] === "Pen") {
    break;
  }
  console.log(products[i]);
}

//Contiunt:
console.log("continue" + "-".repeat(30));

products = ["keybords", 1, 2, "Mouse", "Pen", "Pad", 3, "Mouitor"];

for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]);
}

//Lable

console.log("Lable" + "-".repeat(30));

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    if (colors[j] === "Green") {
      //break;
      //break nestedLoop;
      break mainLoop;
    }
    console.log(`-${colors[j]}`);
  }
}
