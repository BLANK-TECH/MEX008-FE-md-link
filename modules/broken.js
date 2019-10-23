const broken = (objectStats,data) =>{
    
    let count = 0;

    data.forEach(element => {
        if(element.status > 400){
            count = count +1;
        }
    });

    Object.assign(objectStats, {Broken: count});

return objectStats
}

module.exports = broken;