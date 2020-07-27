import nodemailer from "nodemailer";
import "dotenv/config";

interface Option {
  email: string;
  subject: string;
  message: string;
}

interface Message {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export const sendEmail = async (options: Option): Promise<void> => {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message: Message = await transporter.sendMail({
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  });

  const info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
};
