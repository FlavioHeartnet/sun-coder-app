import PortalButton from "@/app/portal/portalButton";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import Logout from "./logout";

export default function LoggedInButton() {
	return (
		<div className="flex gap-4">
			<Link className="flex items-center gap-2 text-sm font-medium [&:hover]:underline" href="#">
              <UserIcon className="h-4 w-4" />
              <span className="hidden md:block">Perfil</span>
          </Link>
          <PortalButton/>
          <Logout/>
		</div>
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