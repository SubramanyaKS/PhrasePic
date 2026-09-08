export const query = async (text: string,accessToken:string): Promise<Blob> => {
  try {
    const apiUrl = process.env.FASTAPI_URL;

    if (!apiUrl) {
      throw new Error("FASTAPI_URL is not configured");
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        prompt: text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("FastAPI error:", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });

      throw new Error(
        `Image API error: ${response.status} ${response.statusText}`
      );
    }

    return await response.blob();
  } catch (error) {
    console.error("Error fetching image API:", error);
    throw error;
  }
};
