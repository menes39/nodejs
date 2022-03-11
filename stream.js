const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, "testdata.txt"), (err,data) => {
//     if(err){
//         throw err
//     }
//     console.log(data);
// })

const stream = fs.createReadStream(path.resolve(__dirname, "testdata.txt"), "utf-8")
stream.on('open', (chunk) => {
    console.log("start")
})

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', (chunk) => {
    console.log("end")
})
