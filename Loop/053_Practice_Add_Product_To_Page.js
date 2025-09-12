let products = ["Keybard", "Mouse", "Pen", "Pad", "Monietr", "iphone"];

let colors = ["Ped", "Green", "Blue"];

let showCount = 5;

document.writeln(`<h1> Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.writeln(`<div>`);
  document.writeln(`<h3> [${i + 1}]
    ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.writeln(`<p>${colors[j]}</p>`);
  }
  document.writeln(`<p> ${colors.join(" | ")} </p>`);
  document.writeln(`</div`);
}
