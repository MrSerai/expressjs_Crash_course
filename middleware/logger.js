const moment=require('moment')//importing moment to capture the date and time

// creating a middleware function
// protocol getts the http(s) protocol on the web browser
// host gets the hosting computer's ip address
// moment gets the date and time of the user's computer
// console.log(moment());
// console.log(new Date());
const logger=(req, res, next)=>{

    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
    };

    module.exports=logger;