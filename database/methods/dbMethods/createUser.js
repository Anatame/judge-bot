const embed = require('../generateEmbeds')
exports.createUser = function(db, message, args){

    db.users.create({
        name: message.author.username,
        id: message.author.id,
        log: {
            message: args[0],
            points: 10
        }
    }).then((data) => {
        message.channel.send(`${data.name} ${data.log.length}`)

        let total = [] 
        data.log.forEach(u => total.push(u.points));

        embedData = {
            name:data.name,
            points: data.log[data.log.length - 1].points, 
            message: data.log[data.log.length - 1].message,
            total: total.reduce((a, b)=> a+b)
    }

        embed.createEmbed(message, embedData)

    })
}