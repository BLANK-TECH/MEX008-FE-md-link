const path = require('path');
const fs = require('fs');
const validate = require('./modules/validate.js');
const state = require('./modules/state.js');
const read = require('./modules/readMarkdown.js');
const convert = require('./modules/convertMarkdown.js');


module.exports = mdLinks = (arrayOption) =>{
    const url = process.argv[2]; 
    const optionOne = process.argv[3];
    const optionTwo = process.argv[4];
    

    if((url && optionOne && optionTwo) != null){
        console.log('elegiste 2 opciones')
    }
    else if((url && optionOne) != null){
        console.log('elegiste una opcion')
    }
    else if(url != null){
        const URL = path.resolve(url);
        console.log('solo escribiste una ruta')
        read(URL)
        .then((data)=>{
            // console.log(data);
            return convert(data,URL)
        })
        .then((arrayObject)=>{
            console.log(arrayObject)
        })
        .catch((error)=>{
            error = new Error('La extension del archivo no es valida (.md)');
            console.log(error);
        })
    }
    else{
        console.log('error, debes ingresar la ruta al menos');
    }
        
    }
    