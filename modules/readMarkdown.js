const fs = require('fs');
const path = require('path');

const readMarkdown = (url)=>{
        

const content = new Promise((resolve,reject) => {
     fs.readFile(url,'utf-8',(error,data)=>{
        if(path.extname(url) === 'md'){
                
                return reject(error);
            }
        resolve(data);
        })    
})
return content;
}

module.exports = readMarkdown;
