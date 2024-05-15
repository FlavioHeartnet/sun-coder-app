import Link from "next/link";
import Image from "next/image";
import UserOptions from "@/components/userOptions";
import { Suspense } from "react";
import Footer from "@/components/footer";

export default async function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex-1 flex-col min-h-screen bg-[#141414]">
            <nav className="flex h-16 w-full items-center border-b bg-gray-100/40 px-4 md:px-6 dark:bg-gray-800/40">
                <Link className="flex items-center gap-4 text-xl font-semibold" href="/">
                    <Image src='/sun.svg' className="dark:invert" alt={""} width={24} height={24} />
                    <span>SunCoder</span>
                </Link>
                <Suspense fallback='carregando...'>
                    <UserOptions />
                </Suspense>
                
            </nav>
            {children}
            <Footer/>
        </main>
    )
}

