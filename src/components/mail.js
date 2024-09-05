const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "falconindustries451@gmail.com",
    pass: "nrcqkdomdydgbksr",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendmail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'Amplifier Waitlist', // sender address
    to: "shzali0a0@gmail.com", // list of receivers
    subject: "New Waitlister", // Subject line
    text: "Hello world?", // plain text body
    html: "email", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

sendmail().catch(console.error);
