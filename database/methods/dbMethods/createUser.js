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
    })
}