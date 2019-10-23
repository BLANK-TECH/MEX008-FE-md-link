const path = require('path');
const fs = require('fs');
const validateMarkdown = require('./modules/validate.js');
const stats = require('./modules/stats.js');
const read = require('./modules/readMarkdown.js');
const convert = require('./modules/convertMarkdown.js');
const broken = require('./modules/broken');
const chalk = require('chalk');

module.exports = mdLinks = (url,optionOne,optionTwo) =>{

    const comandos = new Promise ( (resolve,reject) => {

    if(url === 'help'){
        console.log(`
${chalk.blue.bold('***Interfaz de Línea de Comando***')}

Ejecuta de la siguiente manera a través de la terminal:

    ${chalk.yellow('mdLinks <path-to-file> [options]')}
    
${chalk.blue('**Options**')}

${chalk.red('--validate')}

El módulo hace una petición HTTP para
averiguar si el link funciona o no.

${chalk.red('--stats')}

El output será un objeto con estadísticas
básicas sobre los links.

${chalk.red('--stats --validate')}

Para obtener estadísticas que necesiten de 
los resultados de la validación.
`);
        
    }    
    else if(url != null && optionOne == null && optionTwo == null){
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
    else if(url != null && optionOne != null && optionTwo == null){
        if(optionOne === '--validate'){
            read(url)
            .then((data)=>{
                return convert(data,url);   
            })
            .then((arrayObject)=>{
                return validateMarkdown(arrayObject);
                
            })
            .then((objectValidated)=>{
                return Promise.all(objectValidated);
            })
            .then(data => resolve(data))
            .catch((error)=>{
                reject(error);
            })
        }
        else if(optionOne === '--stats'){
            read(url)
            .then((data)=>{
                return convert(data,url);
            })
            .then((arrayObject)=>{
                return stats(arrayObject);
            })
            .then(data=> resolve(data))  
            .catch((error)=>{
                reject(error);
            })
        }
        else{
            const err = new Error('Opcion no valida, utiliza: mdLinks HELP');
            return resolve(err);    
        }    
    }    
    else if(url != null && optionOne === '--stats' && optionTwo === '--validate'){
        read(url)
            .then((data)=>{
                return convert(data,url);
            })
            .then((arrayObject)=>{
                return validateMarkdown(arrayObject);   
            })
            .then((objectValidated)=>{
                return Promise.all(objectValidated);
            })
            .then((data) =>{
                const objectStats = stats(data);
                return broken(objectStats,data);
            })
            .then(statsBroken => resolve(statsBroken)) 
            .catch((error)=>{
                reject(error);
            })
    }
    else{
        console.log('error, debes ingresar la ruta al menos');
    }
});

return comandos;
        
}
    