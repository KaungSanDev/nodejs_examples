const fs = require('fs');
// //create a file 
// fs.writeFile('example.txt', "this is an example",(err)=>{
// if(err)
// console.log(err);
// else
// console.log('File is sucessfully created');
// // read file
// fs.readFile('example.txt','utf8',(err,file)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log(file);
// })
// });

//rename
// fs.rename('example2.txt', 'example.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("succesfully renamed");
// });

//update inside  data
// fs.appendFile('example.txt', ' Some data being appended',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("success");
// });
//delete file
fs.unlink('example.txt', (err) => {
    if(err)
    console.log(err);
    else
    console.log("success");
})