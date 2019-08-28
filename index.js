const fs = require('fs');
const path = require('path');

// console.log(path);
  fs.readFile('./README.md','utf-8',(err,data)=>{
    if(err){
      // console.log(err);
    }
    else{
      // console.log(data);
    }
    
  });

const mdLinks = require('./mdLinks');

mdLinks.readMarkdown();
  