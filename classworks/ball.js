//document.body.style.backgroundColor = 'black'

//percentage = (parts/whole)*10

 let percent = document.getElementsByClassName("btn");
 
//function percentage(inputnum) {
//  let value = (percent * inputnum) / 100;
//  let addednum = inputnum + value;
//  return addednum;
//}
//console.log(percentage(100, 5));

//percent = buttons
//input num = write on display
//
const BtncontainerElRef = document.getElementById('buttoncontainer')

BtncontainerElRef.addEventListener("onclick",function(){
    console.log(BtncontainerElRef.innerText)
});
//const inputValue = document.getElementById("inputnum");
//console.log(inputValue.value);
//inputValue.addEventListener("input", function(){
//    console.log(inputValue.value)
//})
