const nodeMailer = require('../config/nodemailer');



exports.accCreated = (user) => {
    let htmlString = nodeMailer.renderTemplate({user: user}, '/reg/reminder.ejs')

    console.log("At acc created - user", user, user.email)
    nodeMailer.transporter.sendMail({
        from: 'sanjeevkumarjv@gmail.com',
        to: user.email,
        subject: "Inno Hunt",
        html: "<h2>Hey there, </h2> <br> <h1>Your registration for the online treasure hunt is confirmed.</h1><br> <h4>Level 1 starts on may 24 and ends on may 25. <br> </h4>"//htmlString
    }, (err, info) => {
        if(err) { console.log('Error in sending mail', err); return;}

        console.log('Message sent', info);
        return; 
    });
}