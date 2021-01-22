const db = require('./dbinit');
const check = require('./methods/dbMethods/checkExists')
const update = require('./methods/dbMethods/findnUpdate')
const create = require('./methods/dbMethods/createUser')
const get = require('./methods/dbMethods/getUser')

exports.createUser = function (message, args) {

    check.checkExists(db, message.author, function (status) {

        if (status) return update.updateUser(db, message, args)

        create.createUser(db, message, args)
    })
}

exports.activity = function (message) {
    get.getUser(db, message)
}

exports.getTop5 = function (message) {
    get.getTop5(db, message)
}