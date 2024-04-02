import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabaseClient";
import PortalButton from "./portal/portalButton";

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
  }>){
    const router = useRouter();  
    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) console.log('Error logging out:', error.message)
        else {
          router.push('/');
        }
      }
    return(
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
            <PortalButton/>
            <Button onClick={signOut} size="sm" variant="outline">
                Logout
            </Button>
            </div>
        </nav>
            {children}
        </main>
    )
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