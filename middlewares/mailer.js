const nodemailer = require("nodemailer");

// Middlewares to send mail
const mail = async ( clientMail, subject, message) => {
    // Create a transport
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false,
        port: 587,
        tls: {
            ciphers: "SSLv3"
        },
        auth: {
            user: process.env.MY_EMAIL_ACC,
            pass: process.env.MY_EMAIL_PASS
        },
        from: process.env.MY_EMAIL_ACC,
    });

    // Configure options
    const options = {
        from: process.env.MY_EMAIL_ACC,
        to: clientMail,
        subject: `${subject}`,
        text: `${message}`
    }

    // Send mail
    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(info.response);
        }
    });
};

module.exports = { mail };