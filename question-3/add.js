const fs = require("fs");
const path = require("path");
const pathRoot = '/Logs';
const createLogs = () => {
    if (!fs.existsSync(pathRoot)) {
        fs.mkdirSync(pathRoot);
        console.log(`A new directory ${pathRoot} has been created!`);
        process.chdir(pathRoot);
        for (let i = 1; i <= 10; i++) {
            fs.appendFile(`newfile${i}.txt`,"Hello World!");
            console.log(`newfile${i}.txt has been created!`);
        }

    } else {
        console.log("This directory has been existed!")
    }
}