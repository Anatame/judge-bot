const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: "Id cannot be blank!"
    },
    isSent: {
        type: Boolean,
        default: false
    }
})

const leaderboard = mongoose.model('leaderboard', leaderboardSchema);

module.exports = leaderboard;