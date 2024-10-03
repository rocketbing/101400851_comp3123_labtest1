const fs = require("fs");
const path = require("path");
const pathRoot = '/Logs';
const removeLogs = () => {
    if(fs.existsSync(pathRoot)) {
        const contents = fs.readdirSync(pathRoot);
        contents.forEach(item => {
            const filePath = path.join(pathRoot,item);
            console.log(`deleting file ${item}`);
            fs.unlink(filePath);
        });
        fs.rmdirSync(pathRoot);
    } else {
        console.log("The diesctory doesn't exists!");
    }
}