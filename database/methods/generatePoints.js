exports.generatePoints = function(){
    const months = ["10", "20", "30", "40", "50"];
    const random = Math.floor(Math.random() * months.length);

    return months[random];
}