import nodemailer from "nodemailer";
import "dotenv/config";
import { MapOfStrings } from "./types";

async function sendEmailFn(options: MapOfStrings) {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 2525,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };

  let info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
}

export default sendEmailFn;
