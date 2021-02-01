const embed = require('../generateEmbeds')

exports.getUser = function(db, message){
    db.users.findOne({
        id: message.author.id
    }).then((user) => {
        let messages = []

        user.log.forEach(u => messages.push(u.message))
        message.channel.send(`${messages}`)
    })
}

exports.getTop5 = function(db, message){
    db.users.findOne({
        id: message.author.id
    }).then((user) => {
        let arr = user.log
        
        arr.sort((a, b) => b.points - a.points)

        embed.sendTop5(message, arr)

    })
}

exports.cData = function(db, client){

    db.users.find({}).then((user) => {
        // let arr = user.log
        
        // arr.sort((a, b) => b.points - a.points)

        // embed.sendTop5(message, arr)

    })
    


    client.channels.cache.get('CHANNEL ID').send('Hello here!')
}