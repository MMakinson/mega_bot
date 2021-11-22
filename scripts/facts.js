// import uniqueRandomArray from 'unique-random-array';

const sailingFacts = ['Titanic was the first ocean liner to have a swimming pool and a gym', 'The Americas Cup, a race for sailboats, was originally awarded in 1851, making it the oldest sporting trophy in the world', 'The youngest person to circumnavigate the world was 16-year old Laura Dekker', 'the ideal wind speed for sailing is between eight and twelve knots', 'The average salinity of oceans is 3.5%'];

module.exports = function (bot) {
    bot.hear(/(.*) sailing fact/i, function(res){
        let factType
        factType = res.match[1].toLowerCase();
        switch (factType) {
            case 'interesting':
                return res.reply(`${sailingFacts[2]}`)
                break
            case 'historical':
                return res.reply(`${sailingFacts[0]}`)
                break
            case 'sport':
                return res.reply(`${sailingFacts[1]}`)
                break
            // case 'random':
            //     return msg.reply(`${sailingFacts[0]}`)
            //     break
            default:
                return res.reply(`I don't have a favorite ${sailingFacts}. What's yours?`)
        }
        
    })

}




// Large watercraft are generally called ships. 

// Smaller watercraft are generally called boats. 

// 

// 

// 
// 