module.exports = {
    name: 'set-activity',
    description: 'Set activity status!',
    cooldown: 5,
    execute(message, args) {
        const activityTypes = ['LISTENING', 'WATCHING']
        if(!activityTypes.includes(args[1])) return message.channel.send("Please pass a valid activity.")

        try {
            message.client.user.setActivity(args[0], {
                type: args[1]
            });
            message.channel.send(`Succesfully updated activity to: ${args[1]} ${args[0]}`);
        } catch (error) {
            console.error(error);
            message.channel.send(`There was an error while executing a command \`${command.name}\`:\n\`${error.message}\``);
        }

    },
};