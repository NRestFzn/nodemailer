const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chealseaolivia17@gmail.com",
    pass: "lboo rrkk tzzg mcuv",
  },
});

async function main(email, name, message, services) {
  const source = fs.readFileSync("email-template.html", "utf-8");
  const template = handlebars.compile(source);

  const data = {
    name,
    message,
    services: services.map(e => e),
  };

  const htmlToSend = template(data);

  try {
    const info = await transporter.sendMail({
      from: email,
      to: "chealseaolivia17@gmail.com",
      subject: "Test",
      html: htmlToSend,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error.message);
  }
}

main("Email inputan user", "Nama yang di input user", "Message inputan user", [
  "Build a website",
  "Redesign",
]);
