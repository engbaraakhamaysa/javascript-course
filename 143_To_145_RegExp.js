//143:Replace With Pattern:

//replace & replaceAll

let text = "We Love Progarming And @ Becamse @ Is Amazzing";
console.log(text.replace("@", "JavaScript"));
let re = /@/gi;
console.log(text.replaceAll(re, "java Script"));

//144: RegExp Form Validatiion

document.getElementById("rigister").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;
  let ValidatiionResulet = phoneRe.test(phoneInput);

  //   console.log(ValidatiionResulet);
  //   return false;
  if (ValidatiionResulet === false) {
    return false;
  }
  return true;
};
