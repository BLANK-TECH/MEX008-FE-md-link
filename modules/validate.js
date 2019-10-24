const https = require('https');

const validateLinks = async (arrayObject) => {
    function getHttps(x){
        return new Promise((resolve, reject) => {
                https.get(x.href, (res)=>{
                    let {statusCode} = res;
                    resolve(statusCode);
                });
          
        });
    }

    const objectValidated = arrayObject.map(async (x)=>{
        try {
        const status = await getHttps(x);
        return Object.assign(x, {status: status}); 
        } catch (e) {
            reject(e);
        }
    });

    return objectValidated;
    
}

module.exports = validateLinks;
  