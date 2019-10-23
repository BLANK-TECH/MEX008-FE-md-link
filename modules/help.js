const chalk = require('chalk');

const help = ()=>{
    const helpMe = (`
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
    `)

    return helpMe;
}
module.exports = help;
