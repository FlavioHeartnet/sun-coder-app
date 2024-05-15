import Link from "next/link";

export default function Footer(){
    return(
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between">
      <p>© 2024 SunCoder Inc. All rights reserved.</p>
      <nav className="flex items-center space-x-4 mt-4 md:mt-0">
        <Link className="hover:text-gray-300" href="#">
          Privacy Policy
        </Link>
        <Link className="hover:text-gray-300" href="#">
          Terms of Service
        </Link>
        <Link className="hover:text-gray-300" href="#">
          Contact Us
        </Link>
      </nav>
    </div>
    )
}