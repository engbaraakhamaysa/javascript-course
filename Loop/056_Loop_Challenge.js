let myAdmins = ["Admins", "Osama", "Sayed", "Stop", "Samera"];

let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
let counter = 1;

let newMyAdmins = [];

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  newMyAdmins[i] = myAdmins[i];
}

document.writeln(`<div> We Have ${newMyAdmins.length} Admins`);

for (let i = 0; i < newMyAdmins.length; i++) {
  document.writeln(`<hr>`);
  document.writeln(`<div>`);
  document.writeln(`The Admin For Team ${i + 1} Is ${newMyAdmins[i]}`);
  document.writeln(`<h3>The Team Members:</h3>`);

  for (let j = 0; j < myEmployees.length; j++) {
    if (newMyAdmins[i][0] === myEmployees[j][0]) {
      document.writeln(`<p> -${counter++} ${myEmployees[j]}</p>`);
    }
  }
  counter = 1;
  document.writeln(`</div>`);
}

///Anyther Sultion:
let miAdministradores = ["Ahmed", "Osama", "Stop", "Sayed"];
let miEmpleadores = [
  "Amgad",
  "tt",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
let res = [];
let equipoNumero = 0;
let empleadorNumero = 0;

for (let i = 0; i < miAdministradores.length; i++) {
  if (miAdministradores[i] === "Stop") {
    break;
  }
  res.push(miAdministradores[i]);
}
document.writeln(`<h1>Tenemos ${res.length} Administradores</h1>`);

for (let i = 0; i < res.length; i++) {
  document.writeln("<hr>");
  document.writeln(`<div>`);
  document.writeln(`Administrator en grupo ${i + 1} is ${res[i]}`);
  document.writeln(`<h3>Equipo Miembros:</h3>`);
  for (let j = 0; j < miEmpleadores.length; j++) {
    if (res[i].charAt(0) === miEmpleadores[j].charAt(0)) {
      document.writeln(`<p>[${++empleadorNumero}] ${miEmpleadores[j]} </p>`);
    }
  }
  empleadorNumero = 0;
  document.writeln(`</div>`);
}
