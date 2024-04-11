import { SVGProps } from "react"

export default function ValidatingOrder(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 text-center">
        <Package2Icon className="h-12 w-12" />
            <div className="rounded-lg border border-dashed w-full p-4">
                <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-2xl">Validando seu pedido</h1>
                <p className="text-gray-500 dark:text-gray-400">Aguarde, você será redirecionado para o checkout...</p>
                </div>
            </div>
        </div>
    ) 
}

function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    )
  }