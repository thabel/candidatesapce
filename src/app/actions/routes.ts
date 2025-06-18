import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is stored in .env.local
});

export async function GET() {
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Write a short CV paragraph" }],
      model: "gpt-4",
    });

    const text = response.choices[0]?.message.content;

    if (!text) {
      return NextResponse.json({ error: "No content generated" }, { status: 500 });
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Error generating text:", error);
    return NextResponse.json({ error: "Failed to generate text" }, { status: 500 });
  }
}