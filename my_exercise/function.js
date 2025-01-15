// regular function
//function add(a, b) {
//    return a + b
//}; console.log(add(2, 2));

// arrow function 
//const minus = (a, b) => {
//    return a - b;
//}; console.log(minus(10, 5))

//What is the difference ? 
// 1)No 'this' Binding:
//const person = {
//    name: 'Alice',
//    sayName: function () {
//        console.log(this.name);
//    }
//}; person.sayName();
//
//const person2 = {
//    name: 'Alice_2',
//    sayName: () => {
//        console.log(this.name)
//    }
//}; person2.sayName()

//const arr = [{ name: "John Doe", age: 30 }, { name: 'Bob', age: 18 }];
//
//function addUser(newUser) {
//   arr.unshift(newUser)
//   return console.log(arr)
//}
//addUser({ name: "Ursa" })

function addNewUserToFile(path, newUser) {
    // Step 1: Read the file
    // Step 2: Parse the file content to JSON
    // Step 3: Add the new user to the beginning of the array
    // Step 4: Convert the updated array back to JSON
    // Step 5: Write the updated JSON back to the file
}