const schedule = require('node-schedule');
const getData = require('./dbMethods/getUser')

exports.run = function(db, client) {

    schedule.scheduleJob('* * * * *', ()=>{
        getData.cData(db, client);

    })
    
    schedule.scheduleJob('0 0 * * SUN', ()=>{
        getData.cData(db, client);
    })

}



