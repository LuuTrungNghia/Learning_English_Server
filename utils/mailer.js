const nodeMailer = require("nodemailer");

exports.sendMail = async (to, subject, text) => {
    return new Promise((resolve, reject) => {
        const transport = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "lyvan1507@gmail.com",
                pass: "hbyp azhf zpxq lref",
            },
        });

        const mailOptions = {
            from: "lyvan1507@gmail.com",
            to: to,
            subject: subject,
            html: text,
        };

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                reject({
                    status: "error",
                    message: "Cannot send email",
                });
            } else {
                resolve({
                    status: "success",
                    message: "Email sent: " + info.response,
                });
            }
        });
    });
};
