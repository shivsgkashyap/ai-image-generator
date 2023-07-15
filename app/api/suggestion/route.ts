export async function GET(request: Request) {
  // Connect to our MS Azure Function Endpoint

  const response = await fetch(
    "https://art-ificial-ai-image-gen-sk.azurewebsites.net/api/getchatgptsuggestion",
    {
      cache: "no-store",
    }
  );

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
