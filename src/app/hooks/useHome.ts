import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useHome = ()=>{
    const { data: session } = useSession();
    const router = useRouter();
    const moveToGenerate = () => {
        if (session) {
            router.push('/generation');
        } else {
            router.push('/login');
        }
    };

    return {moveToGenerate};
}
