import PortalButton from "@/app/portal/portalButton";
import Link from "next/link";

export default function LoggedInButton() {
	return (
		<div>
			<Link className="flex items-center gap-2 text-sm font-medium [&:hover]:underline" href="#">
                <UserIcon className="h-4 w-4" />
                <span className="hidden md:block">Profile</span>
            </Link>
            <PortalButton/>
            <LoggedInButton/>
		</div>
    )
}

function UserIcon(props) {
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