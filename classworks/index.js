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

//let file = fs.readFileSync(path, 'utf-8')
//console.log(chalk.green(typeof file,'--',file));
//let convertedfile = JSON.parse(file);
//console.log(chalk.magentaBright(typeof convertedfile,'--', convertedfile));
//convertedfile.unshift(newUser);
//console.log(typeof convertedfile,'--' ,convertedfile)
//let stringfile = JSON.stringify(convertedfile);
//console.log(chalk.green(typeof stringfile,stringfile))
//fs.writeFileSync(path, JSON.stringify(convertedfile))
//return console.log(added)
//}

const path = "users.json";
const newUser = { name: "Ursa" };

function addNewUser(path, addingUser) {
  let file = fs.readFileSync(path, "utf-8");
  let objfile = JSON.parse(file);

  console.log(chalk.blueBright(" original all users :",file));
  for (let i = 0; i < objfile.length; i++) {
    console.log(chalk.green(objfile[i].name));
    if (objfile[i].name === "John Doe") {
      let olduser = objfile[i];
      console.log(" olduser -", olduser);
      let newuser = (olduser = addingUser);
      console.log("  newuser-", newuser);
      olduser = newuser;
      console.log(chalk.red(objfile[i].name,'--CHANGING-->', olduser.name ));
      objfile[i] = newuser;
      console.log(chalk.green('changed'))
    }
  }
  let updatedfile = JSON.stringify(objfile);
  fs.writeFileSync(path, updatedfile);
}

addNewUser(path, newUser);
