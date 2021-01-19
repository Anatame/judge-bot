// at the top of your file
const Discord = require('discord.js');

exports.createEmbed = function (message, name, points, messages) {

    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .addFields({
            name: 'Points',
            value: `You got ${points} points!`
        },
        {
            name: 'For: ',
            value: `${messages}`
        }, {
            name: `Your total points are:`,
            value: `Calculating...`
        } )

    message.channel.send(exampleEmbed);
}