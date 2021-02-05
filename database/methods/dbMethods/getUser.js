const embed = require('../generateEmbeds')

exports.getUser = function (db, message) {


    if (!message.mentions.users.size) {

        db.users.findOne({
            id: message.author.id
        }).then((user) => {
            let messages = []

            user.log.forEach(u => messages.push(u.message))
            message.channel.send(`${messages}`)
        }).catch((err) => {
            message.channel.send("Player hasn't registered yet.")
        })
    } else {


        db.users.findOne({
                id: message.mentions.users.first().id
            }).then((user) => {
                let messages = []

                user.log.forEach(u => messages.push(u.message))
                message.channel.send(`${messages}`)
            })
            .catch((err) => {
                message.channel.send(err)
            })

    }



}

exports.getTop5 = function (db, message) {
    db.users.findOne({
        id: message.author.id
    }).then((user) => {
        let arr = user.log

        arr.sort((a, b) => b.points - a.points)

        embed.sendTop5(message, arr)

    })
}

exports.cData = function (db, client) {

    db.users.find({}).then((user) => {
        let total = []
        user.forEach(userData => {

            let sumArr = []

            userData.log.forEach(u => sumArr.push(u.points));

            let points = sumArr.reduce((a, b) => a + b)

            total.push({
                name: userData.name,
                points: points
            })

        });

        total.sort((a, b) => b.points - a.points)
        let msg = '';
        total.forEach((d, i) => {
            // msg += `(${i+1}) __**${d.name}'s**__ power level is a whooping __**${d.points}**__!\n`

            msg += `(${i+1}) Player name: __**${d.name}**__\n Power Level: __**${d.points}**__!\n Dedication Level: N/A\n Days Won: N/A\n Days Lost: N/A\n \n`
                    
        })

        embed.leaderboard(db, client, msg)
        
    })





}

exports.top = function (db, message) {

    db.users.find({}).then((user) => {
        let total = []
        user.forEach(userData => {

            let sumArr = []

            userData.log.forEach(u => sumArr.push(u.points));

            let points = sumArr.reduce((a, b) => a + b)

            total.push({
                name: userData.name,
                points: points
            })

        })

        total.sort((a, b) => b.points - a.points)
        let msg = '';
        total.forEach((d, i) => {
            msg += `(${i+1}) ${d.name}'s power level is a whooping ${d.points}!\n`
        })



        console.log(msg)
        message.channel.send(msg)
    })

}