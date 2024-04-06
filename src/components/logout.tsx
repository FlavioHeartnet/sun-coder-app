'use client';
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

export default function Logout() {
    const router = useRouter();  
    async function signOut() {
      toast.promise(
        promiseLogout(),
         {
           loading: 'Saindo...',
           success: () => {
            router.refresh();
            return <b>Até mais!!</b>;
           },
           error: <b>Algo deu errado tente novamente!!.</b>,
         }
       );
       async function promiseLogout(){
        const resp = await fetch('/api/logout', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if(resp.status != 200) throw Error();
       }
      
        
      }
    return(
        <Button onClick={signOut} size="sm" variant="outline">
                Logout
        </Button>
    )
}