const https = require('https');

const validateMarkdown = (arrayObject) => {
    // return(arrayObject);
    let array= [];
    //Envolverlo en una promesa
    arrayObject.map((x)=>{
        
        // array.push(x.href);
         https.get(x.href ,(res) =>{

            let { statusCode } = res;
            // console.log(statusCode);
            Object.defineProperty(x,'status',{value:statusCode})
        })

        array.push(x);
        //if que el numero sea igual al del objeto que llega
        //retornarlo en el resolve
    })
    
    return array; 
    
    
}

module.exports = validateMarkdown;
  