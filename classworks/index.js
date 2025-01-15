import { isUtf8 } from "buffer";
import fs, { writeFileSync } from "fs";
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
const newUser = { name: 'Ursa' };


let file = fs.readFileSync(path, 'utf-8')
//console.log(chalk.green(typeof file,'--',file));
let convertedfile = JSON.parse(file);
//console.log(chalk.magentaBright(typeof convertedfile,'--', convertedfile));
convertedfile.unshift(newUser);
//console.log(typeof convertedfile,'--' ,convertedfile)
//let stringfile = JSON.stringify(convertedfile);
//console.log(chalk.green(typeof stringfile,stringfile))
fs.writeFileSync(path, JSON.stringify(convertedfile))
//return console.log(added)
//}


//adding(newUser)

