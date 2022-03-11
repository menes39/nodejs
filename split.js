const fs = require("fs");
const path = require("path");

const fsPromises = require(`fs`.promises);
const fileRead = async() => {
    try{
        await fsPromises.writerfile(path.resolve(__dirname, "text.txt"))
    } catch (error){

    }

}