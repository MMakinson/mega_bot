module.exports = function (bot) {
    bot.respond(/how do you make a yacht look younger?/, function(msg){
        return msg.send('Boat-tox')     
    })
    bot.respond(/what do you call a yacht that can't hold its liquor?/, function(msg){
        return msg.send('Tipsy')
    })
    bot.respond(/what do you do with a sick boat?/, function(msg){
        return msg.send('Take it to the dock')
    })
    bot.respond(/what's a pirate's favorite letter of the alphabet?/, function(msg){
        return msg.send('Arrrr? No its the C (sea)')
    }) 
    bot.respond(/what do you call a boat that doesn’t use naughty words?/, function(msg){
        return msg.send('A censor-ship.')
    }) 
    
}

