'use client';
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

export default function Logout() {
    const router = useRouter();  
    async function signOut() {
      const responseAuth = await fetch('/api/logout', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
        if (responseAuth.status != 200) toast.error('Error logging out')
        else {
          router.refresh();
        }
      }
    return(
        <Button onClick={signOut} size="sm" variant="outline">
                Logout
        </Button>
    )
}