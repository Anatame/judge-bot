const fetch = require('node-fetch');
const {gifAPI} = require('../../config.json')
exports.get = async function(term){

    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${gifAPI}&q=${term}&limit=25&offset=0&rating=g&lang=en`)
    const res = await response.json() || 'error';

    var totalRes = res.data.length;
    var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalRes;

    const gifURL = res.data[responseIndex].images.original.url;

    return gifURL;

}