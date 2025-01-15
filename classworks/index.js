import { isUtf8 } from "buffer";
import fs from "fs";
import chalk from "chalk";
//fs.writeFile('./example.txt', 'hello world', (err)=>{
//    if(err){console.log('error writing file:', err);
//        return;
//    }
//    console.log('success-1');
//});
//
//const files = fs.readdirSync('./javascript')

//let data = fs.readFileSync("./example.txt", 'utf-8');
//
//console.log(data)
//
//data = "  ---updated"

//fs.appendFile("./example.txt","----this is my updated data", function (err) {
//  if (err) throw err;
//  console.log("success-3");
//});

//const append = fs.appendFileSync('example.txt', data)
//console.log(append)//

//JSON CRUS Create, Read, Update, and Delete




//function addfile() {
//let file = fs.readFileSync(path);
//console.log(chalk.green(file))
//let adduser = file.unshift(newUser);
//return console.log(adduser);}
//
//addfile()
const path = "users.json";
const newUser = { name: 'Ursa'};

//function adding(user){
  let file = fs.readFileSync(path) 
   console.log(chalk.green(file));
   let added = fs.appendFileSync(path, JSON.stringify(newUser))
   console.log(added)
  //let added = file.push(user)

  //return console.log(added)
//}

//adding(newUser)

