import { NextResponse } from "next/server";
import contact from "@/data/contact.json";

export async function GET() {
  return NextResponse.json({ contactInfo: contact.contactInfo });
}
