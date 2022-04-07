import nodemailer from 'nodemailer';

const sendgridTransport = require('nodemailer-sendgrid-transport');

const email = process.env.MAILADDRESS;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  }),
);

export default async (req, res) => {
  try {
    const { senderMail, name, content } = req.body;

    if (!senderMail.trim() || !name.trim() || !content.trim()) {
      return res.status(403).send('');
    }

    const message = {
      from: email,
      to: email,
      subject: `Novo e-mail de contato - ${name}`,
      html: `<p><b>E-mail:</b> ${senderMail}<br /><b>Mensagem:</b> ${content}</p>`,
      replyTo: senderMail,
    };

    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Message sent:', info);
      }

      return res.send('');
    });
  } catch (error) {
    return res.json({
      error: true,
      message: error.message,
    });
  }
};
