const db = require('../models/userSchema');
const helpers = require('../database/index')

module.exports = {
	name: 'attack',
    description: 'attack',
	execute(message, args) {
        helpers.top(message)    
	},
};