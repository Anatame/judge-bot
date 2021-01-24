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

        embedData = {
            name:data.name,
            points: data.log[data.log.length - 1].points, 
            message: data.log[data.log.length - 1].message || `Because you ~~worked~~ trained hard!!!`,
            total: total.reduce((a, b)=> a+b)
    }
        
        message.channel.send(`Hey ${embedData.name}, you got ${embedData.points} total = ${embedData.total}`)
        console.log(embedData.total)
        embed.createEmbed(message, embedData)
    })

}