// at the top of your file

const Config = require('../../embedConfig.json')
const {gifAPI} = require('../../config.json')
const fetch = require('node-fetch')
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

exports.sendTop5 = async function (message, arr) {

    let data = '';

    if (!arr.length >= 5) return

    for (let i = 0; i < 5; i++) {
        data += `${i + 1}) ${arr[i].message} with ${arr[i].points}\n`
    }

        const term = 'Super Saiyan'

       
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${gifAPI}&q=${term}&limit=25&offset=0&rating=g&lang=en`)
        const res = await response.json() || 'error';

        var totalRes = res.data.length;
        var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalRes;

        const gifURL = res.data[responseIndex].images.original.url;

        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Your top 5 actities!',
            description: data,
            thumbnail: {
                url: gifURL
            },
            image: {
                url: gifURL
            },
            timestamp: new Date(),
            footer: {
                text: Config.general.footer.text,
                icon_url: Config.general.footer.icon_url,
            },
        };
    
    
    
     
        message.channel.send({
            embed: exampleEmbed
        });
    }


    
