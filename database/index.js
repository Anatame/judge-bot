const db = require('./dbinit');
const check = require('./methods/checkExists')
const points = require('./methods/generatePoints')
const embed = require('./methods/generateEmbeds')

exports.createUser = function (message, args) {

    check.checkExists(db, message.author, function (status) {

        if (status) {
            db.users.findOneAndUpdate({
                "id": message.author.id
            }, {
                "$push": {
                    log: {
                        message: args[0],
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

            

                embed.createEmbed(message, data.name, data.log[data.log.length - 1].points, data.log[data.log.length - 1].message)
            })

        } else {

            db.users.create({
                name: message.author.username,
                id: message.author.id,
                log: {
                    message: args[0],
                    points: 10
                }
            }).then((data) => {
                message.channel.send(`${data.name} ${data.log.length}`)
            })
        }

    })
}

exports.activity = function(message){
    db.users.findOne({ id: message.author.id }).then((user) =>{ 
        const messages = []
        user.log.forEach(u => messages.push(u.message))
         message.channel.send(`${messages}`)
    })
}
