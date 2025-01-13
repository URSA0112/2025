const obj = {
    name: 'ursa',
    age: 19,
    sayName: function () {
       return 'hello my name is '+ this.name + ' I am ' + this.age +' years old '  
    }
}
console.log(obj)