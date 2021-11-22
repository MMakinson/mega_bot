// npm run dev is needed to get bot running!!!

module.exports = function (bot) {
    bot.respond(/wind today (.*)/i, function(msg){
        let time
        time = msg.match[1].toLowerCase().replace(/\s+/g, '');
        if (time == '10am') {
            // day = today.toLocaleDateString()
            // create date here with time as 10am
            return msg.send(`today's wind forecast for lake union starting at ${time} is: 10 knots from SE`)
        } else if (time == '1pm') {
            // create date here with time as 1pm
            return msg.send(`today's wind forecast for lake union starting at ${time} is: 2 knots from N`)
        } else {
            return msg.send('Arrrrrrrrr! Try again, matey! 10am or 1pm today? Thar be the options.')
        }   
    })
    
    bot.respond(/wind tomorrow (.*)/i, function(msg){
        let tomTime
        tomTime = msg.match[1].toLowerCase().replace(/\s+/g, '');
        if (tomTime == '10am') {
            // day = today.toLocaleDateString()
    
            // create date here with time as 10am
            return msg.send(`tomorrow's wind forecast for lake union starting at ${tomTime} is: 7 knots NW`)
        } else if (tomTime == '1pm') {
            // create date here with time as 1pm
            
            return msg.send(`tomorrow's wind forecast for lake union starting at ${tomTime} is: 5 knots SW`)
        } else {
            return msg.send('Arrrrrrrrr! Try again, matey! 10am or 1pm tomorrow? Thar be the options.')
        }   
    })
    
    bot.respond(/wind dat (.*)/i, function(msg){
        let timeDAT
        timeDAT = msg.match[1].toLowerCase().replace(/\s+/g, '');
        if (timeDAT == '10am') {
            // day = today.toLocaleDateString()
            // create date here with time as 10am
            return msg.send(`The wind forecast for lake union the day after tomorrow starting at ${timeDAT} is: 15 knots NW`)
        } else if (timeDAT == '1pm') {
            // create date here with time as 1pm
            return msg.send(`The wind forecast for lake union the day after tomorrow starting at ${timeDAT} is: 25 knots NE`)
        } else {
            return msg.send('Arrrrrrrrr! Try again, matey! 10am or 1pm day after tomorrow? Thar be the options.')
        }   
    })
}

// if yes
        // wind for today 10am-1pm;
        // wind for today 1pm- 4pm;

        // wind for today +1 day 10am-1pm;
        // wind for today + 1 day 1pm- 4pm;

        // wind for today +2 days 10am-1pm;
        // wind for today + 2 days 1pm- 4pm;
        
        // if no, give the date


        // if (bot.hear(/yes/, function(res) {
    //     return res.send('test')
    // })    

    // bot.hear(/What day is today?/i, function(res) {
    //     return res.send(new Date().toDateString())
    // })