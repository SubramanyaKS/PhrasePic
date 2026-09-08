import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export const useHome = ()=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        // Keep navigation decisions synchronized with the Supabase browser session.
        const loadUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setIsAuthenticated(Boolean(user));
        };

        loadUser();
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setIsAuthenticated(Boolean(session?.user));
        });

        return () => subscription.unsubscribe();
    }, [supabase]);

    const moveToGenerate = () => {
        if (isAuthenticated) {
            router.push('/generation');
        } else {
            router.push('/login');
        }
    };

    return {moveToGenerate};
}
