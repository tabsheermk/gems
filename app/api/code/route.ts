import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_GEMINI_API_KEY as string
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!genAI) {
      return new NextResponse("Gemini API Key not found", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction:
        "You are an expert at software engineering as well as an expert programmer. You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations. ",
    });

    const result = await model.generateContent(messages);
    return new NextResponse(result.response.text());
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
