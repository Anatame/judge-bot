const db = require('../models/userSchema');
const helpers = require('../database/index')

module.exports = {
	name: 'get-top',
    description: 'Returns top 5 activities.',
	execute(message, args) {
        helpers.getTop5(message, args)    
	},
};