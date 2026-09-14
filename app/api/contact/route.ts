import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

const ipCache = new Map<string, { count: number; timer: NodeJS.Timeout }>();

function isRateLimited(ip: string): boolean {
  const record = ipCache.get(ip);

  if (!record) {
    const timer = setTimeout(() => {
      ipCache.delete(ip);
    }, RATE_LIMIT_WINDOW);

    ipCache.set(ip, {
      count: 1,
      timer,
    });

    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();

    const { name, email, message, website } = body;

    if (website) {
      return NextResponse.json(
        { message: "Message sent successfully." },
        { status: 200 },
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (name.length > 100 || email.length > 254 || message.length > 2000) {
      return NextResponse.json(
        { error: "Input is too long." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      message,
    });

    if (error) {
      console.error("Supabase error:", error);

      return NextResponse.json(
        { error: "Failed to save message." },
        { status: 500 },
      );
    }

    const { error: emailError } = await resend.emails.send({
      from: "GreenFuture <onboarding@resend.dev>",
      to: "tiwaridevesh937@gmail.com",
      subject: `New contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (emailError) {
      console.error("Resend error:", emailError);
    }

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
