import { useEffect, useState } from "react";
import { downloadImage } from "../utils/downloadImage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useGenerate = () => {
    const [text, setText] = useState<string>('');
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [listening,setListening]= useState<boolean>(false);
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status != 'authenticated') {
            router.push('/login');
        }

    }, [status, router])

    const handleChange = async (event: any) => {
        event.preventDefault();
        setText(event.target.value)
    }

    const refresh = () => {
        setImgSrc(null);
        setLoading(false);
        setText('');
    };

    const handleDownload = () => {
        if (imgSrc) {
            downloadImage(imgSrc);
        }
    };

    const talk=(e:any)=>{
        e.preventDefault();

        if (!listening) {
            setListening(true);
            const SpeechRecognition =
                (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';

            recognition.onresult = async (event:any) => {
                const last = event.results.length - 1;
                const text = event.results[last][0].transcript;
                setText(text)

            };

            recognition.onend = () => {
                setListening(false);
            };

            recognition.start();
        } else {
            window.speechSynthesis.cancel();
            setListening(false);

        }

    };

    const generate = async () => {
        setLoading(true);
        setImgSrc(null);
        if (text.length > 0) {
            try {
                const response = await fetch('/api/generate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text }),
                });

                if (response.status === 429) {
                    alert('You have reached the request limit. Please try again later.');
                    return;
                }

                if (!response.ok) {
                    const errorData = await response.json();
                    alert(`Error: ${errorData.message}`);
                    return;
                }
                const data = await response.json();
                const base64Image = data.imageUrl;
                const blob = await fetch(`data:image/png;base64,${base64Image}`).then(res => res.blob());
                const objURL = URL.createObjectURL(blob);
                setImgSrc(objURL);
            } catch (error) {
                setError('An error occurred while generating the image. Please try again later.');
            } finally {
                setLoading(false);
            }

        }
    };
    return { text, loading, error, imgSrc, handleDownload, generate, refresh, handleChange, talk,listening }

}