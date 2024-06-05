export const query = async (text: string) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL!,
      {
        headers: { 
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          'Content-Type': 'application/json' 
        },
        method: "POST",
        body: JSON.stringify({ inputs: text }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      // console.error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.blob();
    return result;
  } catch (error) {
    // console.error("Error fetching API:", error);
    throw error;
  }
};
