import nodemailer from "nodemailer";
import { Request } from "node-fetch"; // Import the Request type
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export async function POST(request: Request) {
  // Define the type for request
  const { email } = await (request.json() as Promise<{ email: string }>);

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