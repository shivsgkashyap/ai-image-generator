export async function GET(request: Request) {
  // Connect to our MS Azure Function Endpoint

  const response = await fetch(
    "https://art-ificial-ai-image-gen-sk.azurewebsites.net/api/getimages",
    {
      cache: "no-store",
    }
  );

  const blob = await response.blob();
  const textData = await blob.text();
  const data = JSON.parse(textData);

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
