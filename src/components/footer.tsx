import Link from "next/link";

export default function Footer(){
    return(
      <div className="p-4 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between">
      <p>© 2024 SunCoder Inc. todos os direitos reservados.</p>
      <nav className="flex items-center space-x-4 mt-4 md:mt-0">
        <Link className="hover:text-gray-300" href="/policy">
          Politicas de Privcidade
        </Link>
        <Link className="hover:text-gray-300" href="/termsService">
          Termos de Serviço
        </Link>
        <Link className="hover:text-gray-300" href="#">
          Contate-nos
        </Link>
      </nav>
    </div>
    )
}