// src/app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email } = await request.json();

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other services like SendGrid, etc.
    auth: {
      user: process.env.SMTP_SERVER_USERNAME, // Your email
      pass: process.env.SMTP_SERVER_PASSWORD, // Your email password
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.SMTP_SERVER_USERNAME, // Sender address
    to: email, // List of receivers
    subject: "Welcome to the Waitlist!", // Subject line
    text: "Thank you for joining the waitlist!", // Plain text body
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      {
        status: 500,
      }
    );
  }
}
