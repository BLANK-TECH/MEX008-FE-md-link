const https = require('https');

const validateMarkdown = (arrayObject) => {
    let array= [];
        //Envolverlo en una promesa
        const objectValidated = new Promise ((resolve,reject) => {
            arrayObject.map((x)=>{
            https.get(x.href ,(res) =>{

            let { statusCode } = res;
            // console.log(statusCode);
            if(statusCode == null){
                reject(error);

            }
            Object.defineProperty(x,'status',{value:statusCode})
            array.push(x);
                
            })
            
        });
        //if que el numero sea igual al del objeto que llega
            //retornarlo en el resolve
        if(array.length == arrayObject.length){
            
            resolve(array);
        }
     
        
    });
    
    return objectValidated;
    
}

module.exports = validateMarkdown;
  