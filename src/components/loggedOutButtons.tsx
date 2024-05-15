import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { BookIcon } from "./ui/icons/book-icon";
import Link from "next/link";

export default function LoggedOutButton(){
    const options = {
        lang: "pt-BR"
    }
    return(
        <div className="flex gap-4">
            <Link className="flex items-center gap-2 text-sm font-medium [&:hover]:underline" href="/courses">
              <BookIcon className="h-4 w-4" />
              <span className="hidden md:block">Cursos</span>
            </Link>
            <LoginLink postLoginRedirectURL="/" authUrlParams={options} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border rounded p-2 border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50">Entrar</LoginLink>
            <RegisterLink authUrlParams={options} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border rounded p-2 bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90">Cadastre-se</RegisterLink>
        </div>
    )
}