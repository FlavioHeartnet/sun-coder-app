'use client';
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabaseClient";
import { useEffect } from "react";

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
  }>){
    const router = useRouter();
        useEffect(() => {
            const checkSession = async () => {
                const { data: { session } } = await supabase.auth.getSession();
                    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL_API+"api/auth", {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${session?.access_token}`,
                        },
                    });
                    if (res.status!=200) {
                        router.push('/');
                    }
                }
                checkSession();
        }, [router])
    
    return(
        <div>
            {children}
        </div>
    )
}