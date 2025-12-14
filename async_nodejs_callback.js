import fs from "fs"
import { loadavg } from "os"

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


// fs.readdir("data", (err, files) => {
//     if (err) {
//         console.error(err)
//     }
//     else {
//         fs.lstat("data", (err) => {
//             if (err) {
//                 console.error(err)
//             }
//             else {
//                 let path = require("path")
//                 let p = path.join("data",files)
//                 console.log(p)
//             }
//         })
//     }
// })