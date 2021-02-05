const db = require('../models/userSchema');
const helpers = require('../database/index')

module.exports = {
	name: 'top',
    description: 'top',
	execute(message, args) {
        helpers.top(message)    
	},
};