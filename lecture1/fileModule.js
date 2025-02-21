console.log('hello world');
const { isUtf8 } = require('buffer');
const { log, error } = require('console');
const fs=require('fs')
// fs.writeFile('message.text','hello world',(err)=>{
//     if (err) {
//         console.log(err); 
//     }
    
// })
// fs.appendFile('message.text'," data is append",(err)=>{
//     if(err){
//         console.log(err);
        
//     }
// })
let data=fs.readFile('message.text',isUtf8,(error)=>{
    console.log(data);
    
})
console.log(String(data));
