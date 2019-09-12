const path = require('path');
const fs = require('fs');
const validate = require('./modules/validate.js');
const state = require('./modules/state.js');
const read = require('./modules/readMarkdown.js');
const convert = require('./modules/convertMarkdown.js');


module.exports = mdLinks = (url,optionOne,optionTwo) =>{

    const comandos = new Promise ( (resolve,reject) => {

    if(url != null && optionOne == null && optionTwo == null){
            // const URL = path.resolve(url);
            read(url)
            .then((data)=>{
                // console.log(data);
                return convert(data,url)
            })
            .then((arrayObject)=>{
                resolve(arrayObject);
            })
            .catch((error)=>{
                reject(error);
            })
        }
    else if((url && optionOne) != null){
        read(url)
        .then((data)=>{
            return convert(data,url)     
        })
        .then((arrayObject)=>{
            const prueba = validate(arrayObject);
            resolve(prueba);
        })
        .catch((error)=>{
            reject(error);
        })
    }
    else if((url && optionOne && optionTwo) != null){
        console.log('elegiste 2 opciones')
    }
    else{
        console.log('error, debes ingresar la ruta al menos');
    }
});

return comandos;
        
    }
    