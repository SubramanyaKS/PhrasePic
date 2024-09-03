import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { convertBase64ToBlobUrl, fetchGeneratedImage, downloadImage } from "../utils/generate";

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
            // router.push('/login');
            redirect('/login');
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
        setError('');
        setImgSrc(null);
        if (text.length > 0) {
            try {
                const base64Image = await fetchGeneratedImage(text);
                const objURL = await convertBase64ToBlobUrl(base64Image);
                setImgSrc(objURL);
            } catch (error) {
                console.log(error);
                setError('An error occurred while generating the image. Please try again later.');
            } finally {
                setLoading(false);
            }
        }
    };
    return { text, loading, error, imgSrc, handleDownload, generate, refresh, handleChange, talk,listening }
}