import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation (can be expanded)
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Add nodemailer transporter setup and email sending logic here

    console.log("Form data received:", { name, email, subject, message }); // Temporary logging

    // Simulate email sending for now
    // In a real scenario, this is where you'd use nodemailer to send the email

    return NextResponse.json(
      { message: "Email received successfully (simulation)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing email request:", error);
    if (error instanceof SyntaxError) {
      // Handle JSON parsing errors
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
