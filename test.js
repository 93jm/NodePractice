const nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "41032bed462ade",
      pass: "25285f03fde193"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if (error) {
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    })
}

let email_data = {
    from: 'mjuikl7588@gmail.com',
    to: 'mjuikl7588@gmail.com',
    subject: '테스트 메일 이다',
    text: '이건 내용인데?'
}

send(email_data)