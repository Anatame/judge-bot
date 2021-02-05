// at the top of your file

const Config = require('../../embedConfig.json')
const fetch = require('node-fetch')
const Discord = require('discord.js');
const gif = require('./getgif')


exports.createEmbed = async function (message, data) {

    const gifURL = await gif.get('supersaiyan')

    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffdd00')
        .setThumbnail(gifURL)
        .setImage(gifURL)
        .addFields({
            name: 'Wow!',
            value: `Your power lever just shot up by **${data.points}**!`
        }, {
            name: 'Boost reason: ',
            value: `${data.message}`
        }, {
            name: `Your current power level is:`,
            value: data.total
        })

    message.channel.send(exampleEmbed);
}

exports.sendTop5 = async function (message, arr) {

    let data = '';

    if (!arr.length >= 5) return

    for (let i = 0; i < 5; i++) {
        data += `${i + 1}) ${arr[i].message} with ${arr[i].points}\n`
    }

    const gifURL = await gif.get('supersaiyan')

    const exampleEmbed = {
        color: '#ffdd00',
        title: 'Your top 5 activities!',
        description: data,
        thumbnail: {
            url: gifURL
        },
        image: {
            url: gifURL
        }

    };

    message.channel.send({
        embed: exampleEmbed
    });
}

exports.leaderboard = function (db, client, msg) {
    const lembed = {
        color: '#ffdd00',
        title: `__Today's leaderboard__`,
        description: msg,
    }


    db.leaderboard.find({}).then(data => {

        //data[0].isSent
        if (false) {

           client.channels.cache.get('807190857131491378').messages.fetch(`${data[0].id}`).then(msg => msg.edit({
            embed: lembed
        }) )
        
        } else {

            client.channels.cache.get('807190857131491378').send({
                embed: lembed
            }).then(msg => {
                db.leaderboard.create({
                    id: msg.id,
                    isSent: true
                })
            })

        }
    })

}