const nodemailer = require('nodemailer');
const makeEmail = require('./makeContent');
const sendEmail = async(req,res)=>{
    const receiver = req.query.r;
    const department = req.query.d;
    const message = req.query.c;
    console.log(receiver)
    const content = await makeEmail(message,department);
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_SERVER,
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: receiver,
        subject: 'Confirmation: Resolution of Your Concern',
        text: content,
      };
      try {
        const response = await transporter.sendMail(mailOptions);
        if (!response) {
          
          return res.status(404).json({ msg: "No Data Found" });
        }
        return res.status(200).json({ msg: response });
        

        } catch (error) {
          return res.status(500).json({ message: "email is not delievered" });
      }
    };

module.exports = sendEmail;