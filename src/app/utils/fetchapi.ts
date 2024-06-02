export const query = async (data: string) => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL!,
      {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` },
        method: "POST",
        body: JSON.stringify(data),
      }
);
    const result = await response.blob();
    return result;
};
