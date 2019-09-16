const https = require('https');

const validateMarkdown = (arrayObject) => {
    let array= [];
        //Envolverlo en una promesa
        const objectValidated = new Promise ((resolve,reject) => {
            arrayObject.map((x)=>{
                const status = getHttps(x);
                Object.defineProperty(x,'status',{value:status})
                array.push(x);
            
            });
            resolve(array);
        });

        async function getHttps(x){
            try{
                await https.get(x.href, (res)=>{
                    let {statusCode} = res;
                    return statusCode;
                })
            }
            catch(error){
                return error;
                
            }
        }
            
        //if que el numero sea igual al del objeto que llega
            //retornarlo en el resolve
        // if(array.length == arrayObject.length){
            
        //     resolve(array);
        // }
     
        
    
    return objectValidated;
    
}

module.exports = validateMarkdown;
  