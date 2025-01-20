//const buttonElRef = document.createElement('button')
//document.body.appendChild(buttonElRef)
//buttonElRef.style.width = 100 +'px'
//buttonElRef.style.height = 100 +'px'
//buttonElRef.style.backgroundColor = "grey"
//
//const bodyElRef = document.getElementsByTagName('body')[0]
//let bodycolor = bodyElRef.style.backgroundColor = "green"
//
//buttonElRef.onclick = function hello(color){
// bodyElRef.style.backgroundColor = color;
//}
//
//hello('purple')

function hello(color) {
    bodyElRef.style.backgroundColor = color;
  }
  
  const buttonElRef = document.createElement('button');
  document.body.appendChild(buttonElRef);
  buttonElRef.style.width = 100 + 'px';
  buttonElRef.style.height = 100 + 'px';
  buttonElRef.style.backgroundColor = "grey";
  
  const bodyElRef = document.getElementsByTagName('body')[0];
  bodyElRef.style.backgroundColor = "green";
  
  buttonElRef.onclick = function () {
    hello('purple'); // Use the reusable function
  };
  
  // You can also call hello directly:
  hello('blue'); // Changes body color to blue