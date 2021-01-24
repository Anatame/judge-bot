const url = "mongodb://localhost/judgeDB"
const {dbURL} = require('../config.json')
const mongoose = require('mongoose');

mongoose.set("debug", true);
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = Promise;

module.exports.users = require("../models/userSchema")