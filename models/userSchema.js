const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: "Id cannot be blank!"
    },

    name:{
        type: String,
        required: "Name cannot be blank!"
    },

    log:[{
        message:String,
        points: Number,
    }],

    created:{
        type: Date,
        default: Date.now()
    }
})

const users = mongoose.model('users', userSchema);

module.exports = users;