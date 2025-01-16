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
//-----------------CALCULATOR---------------//
//function addNewUserToFile(path, newUser) {
// Step 1: Read the file
// Step 2: Parse the file content to JSON
// Step 3: Add the new user to the beginning of the array
// Step 4: Convert the updated array back to JSON
// Step 5: Write the updated JSON back to the file
//}
//
//
//function addNewUser(path, addingUser) {
//    let file = fs.readFileSync(path, "utf-8");
//    let objfile = JSON.parse(file);
//
//    console.log(chalk.blueBright(" original all users :",file));
//    for (let i = 0; i < objfile.length; i++) {
//      console.log(chalk.green(objfile[i].name));
//      if (objfile[i].name === "John Doe") {
//        let olduser = objfile[i];
//        console.log(" olduser -", olduser);
//        let newuser = (olduser = addingUser);
//        console.log("  newuser-", newuser);
//        olduser = newuser;
//        console.log(chalk.red(objfile[i].name,'--CHANGING-->', olduser.//name ));
//        objfile[i] = newuser;
//        console.log(chalk.green('changed'))
//      }
//    }
//    let updatedfile = JSON.stringify(objfile);
//    fs.writeFileSync(path, updatedfile);
//  }
//-------------------------------------------//

// Create a Trie node
function createNode() {
  return {
    children: {}, // Holds child nodes (characters)
    isEndOfWord: false, // Marks the end of a word
  };
}


// Trie structure
const trie = createNode(); // The root node

// Insert a word into the Trie
function insert(word) {
  let currentNode = trie;

  for (const char of word) {
    // If the character doesn't exist, create a new node
    if (!currentNode.children[char]) {
      currentNode.children[char] = createNode();
    }
    currentNode = currentNode.children[char]; // Move to the next node
  }

  // Mark the end of the word
  currentNode.isEndOfWord = true;
}

// Search for a word in the Trie
function search(word) {
  let currentNode = trie;

  for (const char of word) {
    // If the character is not found, the word does not exist
    if (!currentNode.children[char]) {
      return false;
    }
    currentNode = currentNode.children[char]; // Move to the next node
  }

  // Check if the last node is marked as the end of a word
  return currentNode.isEndOfWord;
}

// Check if a prefix exists in the Trie
function startsWith(prefix) {
  let currentNode = trie;

  for (const char of prefix) {
    // If the character is not found, the prefix does not exist
    if (!currentNode.children[char]) {
      return false;
    }
    currentNode = currentNode.children[char]; // Move to the next node
  }

  return true; // All characters in the prefix were found
}
