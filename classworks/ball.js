const buttonElRef = document.createElement('button')
document.body.appendChild(buttonElRef)
buttonElRef.style.width = 100 + 'px'
buttonElRef.style.height = 100 + 'px'
buttonElRef.style.backgroundColor = "grey"

const bodyElRef = document.getElementsByTagName('body')[0]
let bodycolor = bodyElRef.style.backgroundColor = "green"

const arr = ['white', 'black', 'lightgreen', 'blue'];
for (let i = 0; i < arr.length; i++) {
  (function(index){
    buttonElRef.onclick = function () {
      bodyElRef.style.backgroundColor = arr[index];
      index = (index + 1) % arr.length; 
    }
  }) (i);
}