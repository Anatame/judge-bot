module.exports = {
	name: 'avatar',
    description: 'avatar',
    aliases: ['icon', 'pfp'],
	execute(message, args) {

        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.avatar}`
        })
        
	},
};