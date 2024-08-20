import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const useProfile = ()=>{
    const { data: session, status } = useSession();
    const router = useRouter();
    const [userDetails, setUserDetails] = useState();
    const userName = session?.user?.name
    const userEmail1 = session?.user?.email

    const moveBack = ()=>{
        router.back();

    }


    const fetchData = async () => {
        if (status === 'authenticated' && session?.user?.email) {

            const response = await fetch('/api/auth/userdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userEmail1 }), // Ensure the key is correct
            });

            if (response.ok) {
                const { user } = await response.json();
                setUserDetails(user)
            } else {
                console.error('Error fetching user:', response.statusText);
            }
        }
    };
    useEffect(() => {
        if (status === 'authenticated') {
            fetchData();
        }
        else {
            router.replace('/login');
        }

    }, [userEmail1, status])

    return {userName,userEmail1,moveBack}


}