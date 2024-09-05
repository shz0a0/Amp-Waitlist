
import * as nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "falconindustries451@gmail.com",
      pass: "nrcqkdomdydgbksr",
    },
    logger: true
  });

const mailinfo = {
    from: '"Amplifier Waitlist"',
    to: "shzali0a0@gmail.com",
    subject: "Hello from node",
    text: "Hello world?",
    html: "<strong>Hello world?</strong>",
    headers: { 'x-myheader': 'test header' }
  };

transporter.sendMail(mailinfo, (error,info) => {
if(error){
    console.error("Error",error);
}else{
    console.log("SENT");
}
});
