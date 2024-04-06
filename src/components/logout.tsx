'use client';
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabaseClient";
import { Button } from "./ui/button";

export default function Logout(){
    const router = useRouter();  
    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) console.log('Error logging out:', error.message)
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