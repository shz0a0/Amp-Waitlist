// app/api/send-email/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

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
        user: process.env.SMTP_SERVER_USERNAME, // Your business email
        pass: process.env.SMTP_SERVER_PASSWORD, // Your email password (App Password for Gmail)
      },
    });

    // Email options for the user
    const userMailOptions = {
      from: process.env.SMTP_SERVER_USERNAME, // Sender address
      to: email, // User's email
      subject: "Welcome to the Waitlist!", // Subject line
      text: "Thank you for joining the waitlist!", // Plain text body
    };

    // Email options for the business (your email)
    const businessMailOptions = {
      from: process.env.SMTP_SERVER_USERNAME, // Sender address
      to: process.env.SMTP_SERVER_USERNAME, // Your business email
      subject: "New User Signup", // Subject line
      text: `A new user has signed up with the email: ${email}`, // Plain text body
    };

    // Send email to the user
    const userInfo = await transporter.sendMail(userMailOptions);
    console.log("User email sent: %s", userInfo.messageId);

    // Send email to the business
    const businessInfo = await transporter.sendMail(businessMailOptions);
    console.log("Business email sent: %s", businessInfo.messageId);

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);

    // Return a more detailed error message
    return NextResponse.json(
      { message: "Error sending email", error: error as Error }, // Log the exact error message
      { status: 500 }
    );
  }
}
