const schedule = require('node-schedule');
const getData = require('./dbMethods/getUser')

exports.run = function(db, client) {

    schedule.scheduleJob('0 0 * * *', ()=>{
        getData.cData(db, client);

    })
    
}



