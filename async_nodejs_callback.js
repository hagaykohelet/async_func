import { count } from "console";
import fs from "fs"
import { loadavg } from "os"
import path from "path"

// q1
// fs.readFile("note.txt","utf8",(err,data)=>{
//     console.log(data)
//     fs.stat("note.txt",(err,stat)=>{
//         if(err){
//             console.error(err)
//         }
//         else{
//             console.log(`size is: ${stat.size},\ncreated at: ${stat.mtime}`)
//         }
//     })
// })

// q2
// fs.readdir("data",(err)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         fs.lstat("data/info.txt",(err,stat)=>{
//             if(!stat.isFile()){
//                 console.error(err)
//             }
//             else{
//                 console.log(path.join("data","info.txt"))
//             }
//         })
//     }
// })


// q3

// function countdown(number, callback) {
//     while(number >= 0){
//         console.log(number);
//         number -=1
//     }
//     setTimeout(() => {
//         const str = "times up"
//         callback(str)
//     }, 1000);
    
// }


// countdown(5, function (str) {
//     console.log(str)
// })


fs.readFile("quotes.txt",("utf8"),(err,data) =>{
    if(err){
        console.log(err)
    }
    else{
        const line = data.split("\n")
        const filetredLines = line.filter(line=> line.trim() !== "")
        console.log(filetredLines);
        const updatedContent = filetredLines.join("\n")
        
        console.log(updatedContent);
        
    }
})

