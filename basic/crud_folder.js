const fs = require('fs');
// fs.mkdir('tutorial',(err)=> {
//     if(err)
//     console.log(err);
//     else
//     fs.writeFile('./tutorial/example.txt', '123',(err)=>{
//         if(err)
//         console.log(err);
//         else         
//         console.log("Successfully created file");
//     })
// });
// //need to delete file inside the folder
// fs.unlink('./tutorial/example.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else         
//     {
//         //delete folder
//         fs.rmdir('tutorial', (err) =>{
//             if(err)
//             console.log(err);
//             else         
//             console.log("deletdd folder");
//         })
//     }
// })
fs.readdir('tutorial',(err,files) =>{
    if(err)
    console.log(err);
    else{
       for(let file of files){
           fs.unlink('./tutorial/' + file, (err)=>{
               if(err)
               console.log(err);
               else
               console.log('successfully deletd file');
           })
       }
    }
})