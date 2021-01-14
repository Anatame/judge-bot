module.exports = {
    name: 'set-status',
    description: 'Set status!',
    cooldown: 5,
    execute(message, args) {
        const activityTypes = ['idle', 'dnd', 'invisible', 'online']
        if(!activityTypes.includes(args[0])) return message.channel.send("Please pass a valid status.")

        try {
            message.client.user.setStatus(args[0]);
            message.channel.send(`Succesfully updated status to: ${args[0]}`);
        } catch (error) {
            console.error(error);
            message.channel.send(`There was an error while executing a command \`${command.name}\`:\n\`${error.message}\``);
        }

    },
};