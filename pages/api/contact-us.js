require("dotenv").config();
const nodemailer = require("nodemailer");

import { validationRules } from "../../constants/validation";

export default function handler(req, res) {
  try {
    const { email, name, message, companyName } = req.body;

    if (!email || !name || !message) {
      return res
        .status(400)
        .json({ message: "Email, name and message fields are required!" });
    }

    if (!validationRules.email.pattern.test(email.trim())) {
      return res.status(422).json({ message: "Email is incorrect" });
    }

    if (
      !validationRules.name.pattern.test(name.trim()) ||
      validationRules.name.maxLength < name.trim().length
    ) {
      return res.status(422).json({ message: "Name is incorrect" });
    }

    if (validationRules.message.minLength > message.trim().length) {
      return res.status(422).json({
        message: `Message length must be greater than ${validationRules.message.minLength}`,
      });
    }

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "wraiseit@gmail.com",
        pass: process.env.email_password,
      },
      secure: true,
    });

    const mailData = {
      from: "wraiseit@gmail.com",
      to: "robert.hanesoghlyan@wraiseit.com",
      subject: `Message From ${name.trim()} ${companyName.trim() || ""}`,
      text: message.trim() + " | Sent from: " + email.trim(),
    };

    transporter.sendMail(mailData, function (err) {
      if (err) {
        res
          .status(500)
          .json({ error: "Something went wrong when sending message!" });
      } else {
        res.status(200).json({ message: "Message sent successfully!" });
      }
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Something went wrong when sending message!" });
  }
}
