import fs, { writeFileSync } from "fs";
import chalk from "chalk";
import sharp from "sharp";
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
//
//const path = "users.json";
//const newUser = { name: "Ursa" };
//
//function addNewUser(path, addingUser) {
//  let file = fs.readFileSync(path, "utf-8");
//  let objfile = JSON.parse(file);
//
//  console.log(chalk.blueBright(" original all users :",file));
//  for (let i = 0; i < objfile.length; i++) {
//    console.log(chalk.green(objfile[i].name));
//    if (objfile[i].name === "John Doe") {
//      let olduser = objfile[i];
//      console.log(" olduser -", olduser);
//      let newuser = (olduser = addingUser);
//      console.log("  newuser-", newuser);
//      olduser = newuser;
//      console.log(chalk.red(objfile[i].name,'--CHANGING-->', olduser.name ));
//      objfile[i] = newuser;
//      console.log(chalk.green('changed'))
//    }
//  }
//  let updatedfile = JSON.stringify(objfile);
//  fs.writeFileSync(path, updatedfile);
//}
//
//addNewUser(path, newUser);

//--------end function --------->
// png --> webp

//1) -->input folder dotor baigaa files-g read hiij gargaj irj bn
//const inputfiles = fs.readdirSync("./input")
//2) --> olon zurag baigaa uchiraas neg negeer ni convert hiine
//for (let i = 0; i < inputfiles.length; i++) {
//const inputpath = `./input/${inputfiles[i]}`
// --> ene bol InPut-path , (path deer STRING datatypetai ugugdul baih ystoi )

//const outputpath = `./output/img${i}.webp`
// --> ene bol OutPut-path, (datatype : string)

//sharp(inputpath).toFile(outputpath), (err, info) => { 
//console.log(err, info) 
//}//--> undsen SHARP code
//} // LOOP end





//const outputfile = fs.readdirSync("./output")
//console.log(typeof outputfile)

//deleting ALL files using loop and FS
//const files = fs.readdirSync("./output");
//for (let i = 0; i < files.length; i++) {
//    const path = `./output/${files[i]}`;
//    fs.unlink(path, (err) => { console.log(err) })
//}

// const numbers = [{ name: "ursa" }, { age: 10 }, { hobby: ["ski", "music"] }];
// const each = numbers.map(each => each)
// console.log(each)
// const eachkey = Object.keys(each)
// const eachvalue = Object.values(each)
// console.log(chalk.blue(eachkey), eachvalue)

const inputvalues = [
    {
        key: 1, //(any)address for map , identify , search , find , ....
        text: "take a shower", //(text)inputvalue
        done: false, //(boolean)status ... for change
    },
    {
        key: 1, //(any)address for map , identify , search , find , ....
        text: "go to bed", //(text)inputvalue
        done: false, //(boolean)status ... for change
    },
];

const value = inputvalues.map((each, index) => { return [each.text]})
const push = 'some string'
const emptyArr = [];
emptyArr.push(push)
const total = value.push(emptyArr)
console.log(value )