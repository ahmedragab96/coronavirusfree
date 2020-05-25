import nodemailer from "nodemailer";

export default async function (to: string, subject: string, html: string) {

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.REACT_APP_GMAIL_USERNAME, 
      pass: process.env.REACT_APP_GMAIL_PASSWORD,
    }
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: '"Coronafree Admin" <coronafree.dashboard@gmail.com>', // sender address
    to, // list of receivers seperated by commas
    subject, // Subject line
    html, // html body
  });

  console.log('Message Sent');
}