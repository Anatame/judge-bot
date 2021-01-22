exports.checkExists = function(db, id, result){

    db.users.countDocuments({id: id}, function (err, count){ 
        if(count>0) return result(true);
        return result(false);
    });
}