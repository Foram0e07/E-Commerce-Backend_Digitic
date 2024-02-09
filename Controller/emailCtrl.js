const expressAsyncHandler = require('express-async-handler');
const nodemailer=require('nodemailer');


const sendEmail=expressAsyncHandler(async(data,req,res)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_ID,
          pass: process.env.MP,
        },
      });
      async function main() {
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Hey 👻" <abc@gmail.com>', // sender address
          to: data.to, // list of receivers
          subject: data.subject, // Subject line
          text: data.text, // plain text body
          html: data.htm, // html body
        });
      
        console.log("Message sent: ", info);  
        console.log("Preview URL:%s",nodemailer.getTestMessageUrl(info));
      }    
      await main();
});
module.exports=sendEmail;