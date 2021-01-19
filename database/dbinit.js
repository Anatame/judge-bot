const mongoose = require('mongoose');

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/judgeDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = Promise;

module.exports.users = require("../models/userSchema")