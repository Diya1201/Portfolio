import nodemailer from 'nodemailer';
import { text } from 'stream/consumers';

export default async function sendEmail(req,res) {
    const {name,email,subject,message} = req.body;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'diyasanghvi1201@gmail.com',
            pass: 'Diyas@1201'
        }
    });
    const mailOptions = {
        from: req.body.email,
        to: 'diyasanghvi1201@gmail.com',
        subject: req.body.subject,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:${message}`
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent!'});
}