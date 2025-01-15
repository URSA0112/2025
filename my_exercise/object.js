const obj = {
    name: 'ursa',
    age: 19,
    sayName: function () {
        return 'hello my name is ' + this.name + ' I am ' + this.age + ' years old '
    }
}
console.log(obj)
// output : { name: 'ursa', age: 19, sayName: [Function: sayName] }
// i can't see my function result ,  Because  By default, JavaScript does not show function definitions