import PortalButton from "@/app/managebilling/portalButton";
import Link from "next/link";
import Logout from "./logout";
import { UserIcon } from "./ui/icons/user-icon";
import { BookIcon } from "./ui/icons/book-icon";

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

