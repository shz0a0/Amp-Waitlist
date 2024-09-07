import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Ensure environment variables are loaded
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Check if email is provided
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use other services like SendGrid, etc.
      auth: {
        user: process.env.SMTP_SERVER_USERNAME, // Your email
        pass: process.env.SMTP_SERVER_PASSWORD, // Your email password (App Password for Gmail)
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.SMTP_SERVER_USERNAME, // Sender address
      to: email, // List of receivers
      subject: "Welcome to the Waitlist!", // Subject line
      text: "Thank you for joining the waitlist!", // Plain text body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);

    // Return a more detailed error message
    return NextResponse.json(
      { message: "Error sending email", error: error as Error },
      { status: 500 }
    );
  }
}
