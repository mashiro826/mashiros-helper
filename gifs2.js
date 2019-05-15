 exports.getRandomGifs = function(links){


function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
return(links[getRandomInt(links.length)]);
}