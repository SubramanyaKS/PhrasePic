export const convertBase64ToBlobUrl = async (base64Image: any) => {
    const blob = await fetch(`data:image/png;base64,${base64Image}`).then(res => res.blob());
    return URL.createObjectURL(blob);
};

export const fetchGeneratedImage = async (text: string) => {
    const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
    });

    if (response.status === 429) {
        throw new Error('You have reached the request limit. Please try again later.');
    }

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message}`);
    }

    const data = await response.json();
    return data.imageUrl;
};

export const downloadImage = (imgSrc: string) => {
    if (imgSrc) {
        const link = document.createElement('a');
        link.href = imgSrc;
        link.download = 'phrasepic-image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

export const blobToBase64 = async (blob: Blob): Promise<string> => {
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return buffer.toString('base64');
};