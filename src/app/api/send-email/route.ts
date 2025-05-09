import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Retrieve SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpFromEmail = process.env.SMTP_FROM_EMAIL;
    const smtpToEmail = process.env.SMTP_TO_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !smtpFromEmail || !smtpToEmail) {
      console.error("SMTP configuration missing in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error for sending email." },
        { status: 500 }
      );
    }

    // Create nodemailer transporter
    // We use parseInt for smtpPort as environment variables are strings.
    // The `secure` option is false by default. If you use port 465 (SSL), set secure: true.
    // For port 587 or 2525 (TLS/STARTTLS), secure: false is typical, and TLS is enabled automatically if the server supports it.
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      // secure: smtpPort === "465", // Example: Set to true if using port 465 for SSL
      // requireTLS: true, // You might need this depending on SMTP2GO's requirements for non-SSL ports
    });

    // Construct email options
    const mailOptions = {
      from: `"${name}" <${smtpFromEmail}>`, // Sender address (shows name in email client)
      replyTo: email, // Set reply-to to the user's email
      to: smtpToEmail, // List of receivers
      subject: `New Contact Form Submission: ${subject}`, // Subject line
      text: `You have a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`, // Plain text body
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p>You have received a new message through your website's contact form.</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</div>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;">
          <p style="font-size: 0.9em; color: #777;">This email was sent from your website's contact form.</p>
        </div>
      `, // HTML body
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (mailError) {
      console.error("Error sending email:", mailError);
      // It's good to cast mailError to Error to access properties like message
      const errorMessage = mailError instanceof Error ? mailError.message : "Unknown mail error";
      return NextResponse.json(
        { error: "Failed to send email.", details: errorMessage },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing email request:", error);
    if (error instanceof SyntaxError) {
      // Handle JSON parsing errors
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    const errorMessage = error instanceof Error ? error.message : "Unknown internal error";
    return NextResponse.json(
      { error: "Internal Server Error", details: errorMessage },
      { status: 500 }
    );
  }
}
