import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export const useProfile = ()=>{
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const supabase = createClient();
    const userName = user?.user_metadata?.name ?? user?.email;
    const userEmail1 = user?.email;

    const moveBack = ()=>{
        router.back();

    }


    useEffect(() => {
        // Read the authenticated Supabase user instead of a NextAuth session.
        const loadUser = async () => {
            const { data: { user: currentUser } } = await supabase.auth.getUser();
            setUser(currentUser);
            if (!currentUser) router.replace('/login');
        };

        loadUser();
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, [router, supabase]);

    return {userName,userEmail1,moveBack}


}