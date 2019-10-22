const https = require('https');

const validateMarkdown = async (arrayObject) => {
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
            console.log(e);
        }
    });

    return objectValidated;
    
}

module.exports = validateMarkdown;
  