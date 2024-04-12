//TODO: isAuth is not working, probably because of a layout issue, fix it later
import { Input } from "@/components/ui/input"
import Layout from "../homeLayout"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"

export default async function ProfilePage() {
    
    let isAuth;
    try{
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL_API+'/api/auth', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          isAuth = await response.json();
          console.log(isAuth);
    }catch(e){
        console.log(e);
        console.log("Error in fetching auth");
    }
    
    return (
            <Layout>
            <div className="container mx-auto grid items-center justify-center min-h-screen">
            {
                isAuth ? 
                <>
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold">Seu Perfil</h1>
                            <p className="text-gray-500 dark:text-gray-400">Atualize as informações do seu perfil aqui.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="grid gap-2 text-sm">
                                <div className="grid sm:grid-cols-2 gap-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="first-name">Nome</Label>
                                        <Input id="first-name" value="Jared" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="last-name">Sobrenome</Label>
                                        <Input id="last-name" value="Palmer" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" value="example@acme.inc" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 border border-gray-200 rounded-lg p-6 text-sm dark:border-gray-800 dark:border-gray-800">
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold">Assinaturas e Produtos</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Gerencie suas assinaturas aqui:</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 py-8 justify-between">
                    <Link href={"/"} className="h-11 px-8 md:w-64 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50" >Voltar</Link>
                    <Button className="md:w-64 w-full" size="lg">Salvar</Button>
                </div>

            </>
            :
            <div>
                    <div className="grid gap-4">
                        <div className="space-y-2">
                        <div className="space-y-2">
                            <h1 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
                                Ops! Algo deu errado.
                            </h1>
                            <p className="mx-auto max-w-[400px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Entre com sua conta para ter acesso a esta pagina. 
                            </p>
                        </div>
                        </div>
                        <div className="flex justify-center">
                        <LoginLink
                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm gap-1.5 sm:gap-1.5 md:gap-2.5 lg:gap-2.5 xl:gap-2.5 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        >
                            Login
                        </LoginLink>
                        </div>
                    </div>
            </div>
        
            } 
            </div>
        </Layout>
    )
}