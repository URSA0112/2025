const obj = {
    name: 'ursa',
    age: 19,
    sayName: function (name, age) {
        return 'hello my name is ' + name + ' I am ' + age + ' years old '
    }
}
console.log(obj) 
    
// output : { name: 'ursa', age: 19, sayName: [Function: sayName] }
// i can't see my function result ,  Because  By default, JavaScript does not show function definitions