const db = require('../models/userSchema');
const helpers = require('../database/index')

module.exports = {
	name: 'activity',
    description: 'activity',
	execute(message, args) {
        helpers.activity(message, args)    
	},
};