import Link from "next/link";
import Image from "next/image";
import { supabase } from "../../utils/supabaseClient";
import { useState } from "react";
import LoggedInButtons from "@/components/loggedInButtons";
import LoggedOutButton from "@/components/loggedOutButtons";

export default async function Layout({ children }: Readonly<{
    children: React.ReactNode;
  }>){
    const [isAuth, setAuth] = useState(false);
  
            const { data: { session } } = await supabase.auth.getSession();
                const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL_API+"api/auth", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session?.access_token}`,
                    },
                });
                if (res.status==200) {
                  setAuth(!isAuth);
                }

    return(
        <main className="flex-1 flex-col min-h-screen">
            <nav className="flex h-16 w-full items-center border-b bg-gray-100/40 px-4 md:px-6 dark:bg-gray-800/40">
            <Link className="flex items-center gap-4 text-xl font-semibold" href="#">
                <Image src='/sun.svg'  className="dark:invert" alt={""} width={24} height={24} />
                <span>SunCoder</span>
            </Link>
            <div className="ml-auto flex items-center gap-4">
            {
              isAuth ? <LoggedInButtons/> : <LoggedOutButton/>
            }
            </div>
        </nav>
            {children}
        </main>
    )
}

