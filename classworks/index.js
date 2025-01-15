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

//JSON
let text ='JSON file data';
const newfile = fs.writeFileSync("./users.json", text);
console.log(chalk.red(text));

fs.readFile("users.json",function (err, data) {
  if (err) throw err;
  console.log(chalk.green('success'))

  fs.writeFile("user.json", data, callback);
  const users = JSON.parse(text);
  console.log(chalk.pink(users));
});
