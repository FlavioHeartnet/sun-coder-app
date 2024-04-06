import Link from "next/link";

export default function Footer(){
    return(
        <div className="flex p-4 text-left gap-2 text-sm border-t dark:border-gray-800">
        <span className="text-gray-500">© 2024 SunCoder Inc</span>
        <Link className="text-blue-600 underline" href="#">
          Terms
        </Link>
        <Link className="text-blue-600 underline" href="#">
          Privacy
        </Link>
      </div> 
    )
}