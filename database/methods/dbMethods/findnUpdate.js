const points = require('../generatePoints')
const embed = require('../generateEmbeds')

exports.updateUser = function(db, message, args ){

    db.users.findOneAndUpdate({
        "id": message.author.id
    }, {
        "$push": {
            log: {
                message: args.join(' '),
                points: points.generatePoints()
            }
        }
    }, {
        new: true,
        useFindAndModify: false
    }).then((data) => {
        let total = [] 
        data.log.forEach(u => total.push(u.points));
        
        message.channel.send(`Hey ${data.name}, you got ${data.log[data.log.length - 1].points} total = ${total.reduce((a, b)=> a+b)}`)
        
        embed.createEmbed(message, data.name, data.log[data.log.length - 1].points, data.log[data.log.length - 1].message, total.reduce((a, b)=> a+b))
    })

}