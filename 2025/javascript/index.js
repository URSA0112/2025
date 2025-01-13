import fs from 'fs'
fs.writeFile('./exapmle.txt', 'hello world', (err)=>{
    if(err){console.log('error writing file:', err);
        return;
    }
    console.log('successs');
});