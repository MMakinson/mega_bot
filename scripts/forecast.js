// npm run dev is needed to get bot running!!!
// API key: b726e586f2bc4a5dc52dd85793e107ce
// 

module.exports = function (bot) {
    let today = new Date();
        
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate()+1);
    tomorrow.toLocaleDateString();
        
    let dat = new Date(today);
    dat.setDate(today.getDate()+2);
    dat.toLocaleDateString();

    bot.respond(/wind today (.*)/i, function(msg){
        let time
        time = msg.match[1].toLowerCase().replace(/\s+/g, '');
        if (time == '10am') {
            today = today.setHours(10,0,0,0);
            let todayAm = new Date(today)
            return msg.send(`today's wind forecast for lake union starting ${todayAm} is: 10 knots from SE`)
        } else if (time == '1pm') {
            today = today.setHours(13,0,0,0);
            todayPm = new Date(today)
            return msg.send(`today's wind forecast for lake union starting ${todayPm} is: 2 knots from N`)
        } else {
            return msg.send('Arrrrrrrrr! Try again, matey! 10am or 1pm today? Thar be the options.')
        }   
    })
    
    bot.respond(/wind tomorrow (.*)/i, function(msg){
        let tomTime
        tomTime = msg.match[1].toLowerCase().replace(/\s+/g, '');
        if (tomTime == '10am') {
            tomorrow = tomorrow.setHours(10,0,0,0);
            let tomAm = new Date(tomorrow);
            return msg.send(`tomorrow's wind forecast for lake union starting ${tomAm} is: 7 knots NW`)
        } else if (tomTime == '1pm') {
            tomorrow = tomorrow.setHours(13,0,0,0);
            let tomPm = new Date(tomorrow);
            return msg.send(`tomorrow's wind forecast for lake union starting ${tomPm} is: 5 knots SW`)
        } else {
            return msg.send('Arrrrrrrrr! Try again, matey! 10am or 1pm tomorrow? Thar be the options.')
        }   
    })
    
    bot.respond(/wind dat (.*)/i, function(msg){
        let timeDAT
        timeDAT = msg.match[1].toLowerCase().replace(/\s+/g, '');
        if (timeDAT == '10am') {
            dat = dat.setHours(10,0,0,0);
            let datAm = new Date(dat);
            return msg.send(`The wind forecast for lake union the day after tomorrow starting ${datAm} is: 15 knots NW`)
        } else if (timeDAT == '1pm') {
            dat = dat.setHours(13,0,0,0);
            let datPm = new Date(dat);
            return msg.send(`The wind forecast for lake union the day after tomorrow starting ${datPm} is: 25 knots NE`)
        } else {
            return msg.send('Arrrrrrrrr! Try again, matey! 10am or 1pm day after tomorrow? Thar be the options.')
        }   
    })
}

