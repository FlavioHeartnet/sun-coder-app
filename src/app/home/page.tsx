'use client';
import CheckoutButton from "@/components/checkoutbutton";
import PortalButton from "../portal/portalButton";
import { supabase } from './../../../utils/supabaseClient';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function HomePage(){

    const checkSession = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          window.location.href = '/'
        }
    }
    checkSession();
    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) console.log('Error logging out:', error.message)
        else {
            window.location.href='/';
        }
      }

    return (
    <main className="flex-1 flex-col min-h-screen">
        <nav className="flex h-16 w-full items-center border-b bg-gray-100/40 px-4 md:px-6 dark:bg-gray-800/40">
        <Link className="flex items-center gap-4 text-xl font-semibold" href="#">
            <Image src='/sun.svg'  className="dark:invert" alt={""} width={24} height={24} />
            <span>SunCoder</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link className="flex items-center gap-2 text-sm font-medium [&:hover]:underline" href="#">
            <UserIcon className="h-4 w-4" />
            <span className="hidden md:block">Profile</span>
          </Link>
          <Button onClick={signOut} size="sm" variant="outline">
            Logout
          </Button>
        </div>
      </nav>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The complete platform for building the Web
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and scale the
              best web experiences.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <CheckoutButton/>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <PortalButton/>
          </div>
        </div>
      </section>
    </main>
    );
}

function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }