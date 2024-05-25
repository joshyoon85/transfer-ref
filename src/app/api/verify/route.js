import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    organization: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION,
    project: process.env.NEXT_PUBLIC_OPENAI_PROJECT,
  });

  try {
    const { text } = await request.json();
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an expert in determining whether soccer transfer rumor is true or not. Soccer rumor is given in text. You should answer a probability of a given rumor is true from 0 to 100. Just a number. Don't include any other information.",
        },
        {
          role: "user",
          content: text[0],
        },
      ],
    });

    const chatResponse = response.choices[0].message.content;

    return NextResponse.json({
      prediction: chatResponse,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Could not verify rumor",
      },
      { status: 500 }
    );
  }

  return;
}
