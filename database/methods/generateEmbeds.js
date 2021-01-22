// at the top of your file
const Config = require('../../embedConfig.json')
const Discord = require('discord.js');



exports.createEmbed = function (message, name, points, messages, total) {

    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .addFields({
            name: 'Wow!',
            value: `Your power lever just shot up by **${points}**!`
        }, {
            name: 'Boost reason: ',
            value: `${messages}`
        }, {
            name: `Your current power level is:`,
            value: total
        })

    message.channel.send(exampleEmbed);
}

exports.sendTop5 = function (message, arr) {

    let data = '';
    
    if(!arr.length >= 5) return

    for(let i = 0; i < 5; i++) {
        data += `${i + 1}) ${arr[i].message} with ${arr[i].points}\n`
    }
    

    const exampleEmbed = {
        color: 0x0099ff,
        title: Config.general.title,
        author: {
            name: Config.general.author.name,
            icon_url: Config.general.author.icon_url,
            url: Config.general.author.url,
        },
        description: data,
        thumbnail: {
            url: Config.general.thumbnail.url,
        },
        image: {
            url: Config.general.image.url,
        },
        timestamp: new Date(),
        footer: {
            text: Config.general.footer.text,
            icon_url: Config.general.footer.icon_url,
        },
    };



    message.channel.send({ embed: exampleEmbed });

    // message.channel.send(Config.general.general.author.name)

}