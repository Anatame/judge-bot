module.exports = {
	name: 'args-info',
	description: 'args-info!',
	usage: '<myArgument>',
    args: true,
	execute(message, args) {

        if (args[0] === 'foo') {
			return message.channel.send('barrr');
		}
		
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
        
	},
};