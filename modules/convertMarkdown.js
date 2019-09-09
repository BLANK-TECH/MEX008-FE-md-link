const path = require('path');

const convertMarkdown = (data,url) => {

    const ArrayObject = new Promise ((resolve,reject) =>{
        
        const trimExtremes = (str) => {
            return str.split('').slice(1, -1).join('');
        }

    const expReg = new RegExp (/(\[[a-zA-Z0-9\.?]{1,}\])+(\(https\:\/\/(www\.)?[a-zA-Z0-9\-?\_?]{1,}((\.?[a-z]{2,4})?\/?){1,6}\))/,"gm");
        
        let myArray; 
        let final = [];
    
        while ((myArray = expReg.exec(data)) !== null) {
            let href = trimExtremes(myArray[2]);
            let text = trimExtremes(myArray[1]);    

            let msg = {'href': href,
                    'text': text,
                    'file': url
                        };
            
    
            final.push(msg);
            resolve(final);
        }

        if(myArray == null){
            const error = new Error('no existen coincidencias');
            return reject(error);
        }
        
        
        // console.log(final);
        
    });
    return ArrayObject;
}
  
module.exports = convertMarkdown;
