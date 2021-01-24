// const url = "mongodb://localhost/judgeDB"
// const {dbURL} = require('../config.json')
const mongoose = require('mongoose');

mongoose.set("debug", true);
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = Promise;

module.exports.users = require("../models/userSchema")