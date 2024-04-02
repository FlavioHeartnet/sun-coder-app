'use client';

import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

export function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handlelogin = async  () =>{
    toast.promise(
    login(),
    {
      loading: 'Logging...',
      success: () => {
        
        router.push("/home");
        return (<b>Successfully Logged!</b>)
      },
      error: <b>Could not login.</b>,
    }
  );
      
  }
  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password,
    });
    if (error) {
      console.log("Error:", error);
      throw Error("error: "+ error);
    }  
    await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.session.access_token}`,
      },
    });
    
  }
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="mx-auto max-w-sm space-y-4 text-left">
          <div className="flex justify-center">
            <Image src='/sun.svg'  className="dark:invert" alt={""} width={100} height={100} />
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome to SunCoder</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" onChange={(e) => setEmail(e.target.value)} placeholder="your e-mail" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" onChange={(e) => setPassword(e.target.value)} placeholder="your password" required type="password" />
            </div>
            <div className="space-y-2 ">
              <Button onClick={handlelogin} className="mt-8 w-full">Login</Button>
              
              <Button className="mt-4 w-full">Login with Google</Button>
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex p-4 text-left gap-2 text-sm border-t dark:border-gray-800">
        <span className="text-gray-500">© 2024 SunCoder Inc</span>
        <Link className="text-blue-600 underline" href="#">
          Terms
        </Link>
        <Link className="text-blue-600 underline" href="#">
          Privacy
        </Link>
      </div>
    </div>
  )
}

