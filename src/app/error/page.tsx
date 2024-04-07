import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full text-center">
      <div className="grid gap-4">
        <div className="space-y-2">
          <FlagIcon className="mx-auto text-6xl text-gray-500 translate-y-0.5" />
          <div className="space-y-2">
            <h1 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
              Ops! Algo deu errado.
            </h1>
            <p className="mx-auto max-w-[400px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Não podemos concluir sua solicitação no momento. Por favor, tente novamente mais tarde. 
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm gap-1.5 sm:gap-1.5 md:gap-2.5 lg:gap-2.5 xl:gap-2.5 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/"
          >
            Voltar
          </Link>
        </div>
      </div>
    </div>
  )
}

function FlagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
