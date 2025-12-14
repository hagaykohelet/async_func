import { error } from "console";
import fs from "fs"



// q1
// function getUserName(callback){
//     setTimeout(()=>{
//         const user_name = "hagay"
//         callback(user_name)
//     },1000)
// }



// getUserName(function(name){
//     console.log(`user name is: ${name}`)
// })


// q1.2

// function loadScore(callback){
//     setTimeout(()=>{
//         const score = 85;
//         callback(score)
//     },1000)
// }



// loadScore(
//     function(score){
//     console.log(`loaded score: ${score}`)
// }
// )


// q1.3
// function checkLogin(callback){
//     setTimeout(()=>{
//         const isLoggedln = false
//         callback(isLoggedln)
//     },2000)
// }

// checkLogin((isLoggedln)=>{
//     if (isLoggedln){
//         console.log(`user is loggedln`)
//     }
//     else if(!isLoggedln){
//         console.log("User is NOT logged in")
//     }
// })



// q1.4
// function getProductPrice(productId, callback) {
//     setTimeout(() => {
//         let price = 99.9
//         callback(price)
//     }, 1200);
// }

// getProductPrice(123, function(new_price){
//     console.log('Requesting prouct price ');
//     console.log(`price product ${123} is : ${new_price}`)
// })


// q1.5

// function loadConfig(callback){
//     setTimeout(() => {
//         let config =  {env:"dev",
//             debug:true
//         }
//         callback(config)
//     }, 500);
//     console.log(`after set time out`)
// }


// loadConfig(function(config){
//     console.log('config loaded:' ,config);
// })



// q1.6
// function addAsync(a,b,callback){
//     setTimeout(() => {
//         let sum = a + b
//         callback(sum)
//     }, 1000);
// }


// addAsync(5,7, function(sum){
//     console.log(`Sum is : ${sum}`)
// })



// q1.7
// function getFirstElement(array, callback){
//     setTimeout(() => {
//         let element = array[0]
//         callback(element)
//     }, 700);
// }

// getFirstElement(["a","b","c"],function(element){
//     console.log("first:", element)
// })


// q1.8
// function isEvenAsync(number, callback) {
//     setTimeout(() => {
//         if (number % 2 == 0) {
//             callback(true)
//         }
//         else {
//             callback(false)
//         }
//     }, 800);
// }

// isEvenAsync(5, function (number){
//     console.log(number);
// })


// q1.9

// function downloadFile(url, callback){
//     setTimeout(() => {
//         console.log("Downloading from: ", url);
//         callback("download finished")
//     }, 1500);
// }

// downloadFile("http://example.com/file", function(log){
//     console.log(log);
// })

// q1.10

// function doubleAsync(value, callback){
//     setTimeout(() => {
//         let result = value * 2
//         callback(result)
//     }, 300);
// }


// doubleAsync(10, function(sum){
//     console.log(`result is : ${sum}`)
// })




// fs.writeFile("note.txt","hello from async writeFile",(err)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         console.log("file written successfully")
//     }
// })


// fs.readFile("note.txt","utf8",(err,data) =>{
//     if(err){
//         console.log("error reading file")
//     }
//     else{
//         console.log(`content: ${data}`)
//     }
// })


// fs.appendFile("note.txt","\nNew line added", (err)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         console.log("line appended")
//     }
// })


// fs.mkdir("logs",(err)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         console.log("directory 'logs' created");
//     }
// })


// fs.writeFile("logs/log.txt","first log line",(err)=>{
//     if(err){
//         console.log("error creating log file")
//     }
//     else{
//         console.log("log file created")
//     }
// })


// fs.readdir("logs",(err,files)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         console.log(`files in logs: ${files}`)
//     }
// })


// fs.stat("note.txt",(err,stat)=>{
//     if(err){
//         console.log("Error getting stats")
//     }
//     else{
//         console.log("is file:", stat.isFile(), "size:",stat.size)
//     }
// })


// fs.unlink("logs/log.txt",(err)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         console.log("log.txt deleted")
//     }
// })


// fs.writeFile("note.txt","new content here",(err)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         console.log("note.txt overwritten");
//     }
// })



// fs.readFile("note.txt","utf8",(err,data)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         console.log("content: ",data)
//     }
// })


// fs.mkdir("data",(err)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         fs.writeFile("data/info.txt","some info",(err)=>{
//             if(err){
//                 console.error(err)
//             }
//             else{
//                 console.log("successful to write")
//             }
//         })
//     }
// })