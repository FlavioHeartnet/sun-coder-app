import PortalButton from "@/app/managebilling/portalButton";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import Logout from "./logout";

export default function LoggedInButton() {
	return (
		<div className="flex gap-4">
			<Link className="flex items-center gap-2 text-sm font-medium [&:hover]:underline" href="/profile">
              <UserIcon className="h-4 w-4" />
              <span className="hidden md:block">Perfil</span>
          </Link>
          <Link className="flex items-center gap-2 text-sm font-medium [&:hover]:underline" href="/courses">
              <BookIcon className="h-4 w-4" />
              <span className="hidden md:block">Cursos</span>
          </Link>
          <PortalButton/>
          <Logout/>

		</div>
    )
}
function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}
function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }