// regular function
function add(a, b) {
    return a + b
}; console.log(add(2, 2));

// arrow function 
const minus = (a, b) => {
    return a - b;
}; console.log(minus(10, 5))

//What is the difference ? 
// 1)No 'this' Binding:
const person = {
    name: 'Alice',
    sayName: function () {
        console.log(this.name);
    }
}; person.sayName();

const person2 = {
    name: 'Alice_2',
    sayName: () => {
        console.log(this.name)
    }
}; person2.sayName()