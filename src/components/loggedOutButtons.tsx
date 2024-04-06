import Link from "next/link";

export default function LoggedOutButton(){
    return(
        <div className="flex gap-4">
             <Link href='/login' className="border rounded p-2 border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                Entrar
            </Link>
            <Link href='#' className=" border rounded p-2 bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90" >
                Cadastre-se
            </Link>
        </div>
    )
}