const fs = require('fs');
const path = require('path');

const readMarkdown = (url)=>{
       
    const URL = path.resolve(url);
    const content = new Promise((resolve,reject) => {
     fs.readFile(URL,'utf-8',(error,data)=>{
        if(path.extname(URL) === 'md'){
            const error = new Error ('La extension del archivo no es valida');
            reject(error);
            }
        resolve(data);
        })    
})
return content;
}

module.exports = readMarkdown;
