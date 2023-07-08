import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Tell MS Azure Function Endpoint to Generate Image
  const res = await request.json();
  const prompt = res.prompt;

  const response = await fetch("/api/generateImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const textData = await response.text();

  return NextResponse.json(textData);
}
