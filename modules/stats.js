

const stats = (arrayObject) => {
    const objectStats = new Object();
    const total = arrayObject.length;
    const arrayUrls = [];
    let url;
    let unique = 0;
    


    arrayObject.forEach(element => {
        arrayUrls.push(element.href);       
    });


    for(i=0; i<arrayUrls.length; i++){
        let indices=[];
        url = arrayUrls[i];
        let idx = arrayUrls.indexOf(url);
        while (idx != -1) {
            indices.push(idx);
            idx = arrayUrls.indexOf(url, idx + 1);
        }
        
        if(indices.length == 1){
            unique = unique +1;
        }
    }
    
    Object.assign(objectStats, {Total: total});
    Object.assign(objectStats, {Unique: unique});
    

    return objectStats;
}


module.exports = stats;