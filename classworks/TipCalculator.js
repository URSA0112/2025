const BtnContainerElRef = document.getElementById("buttoncontainer");
const inputElRef = document.getElementById("inputnum");
const resultElRef = document.getElementById("result");
const btnElFef = document.getElementsByClassName("btn");

for (let i = 0; i < btnElFef.length; i++) {
btnElFef[i].addEventListener('click', function () {
    let whole = Number(inputElRef.value);
    let buttons = btnElFef[i].value
    let result = ((whole * buttons) / 100) + whole;
    resultElRef.innerHTML = result
    console.log(result)
  })
}

















