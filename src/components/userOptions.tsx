'use server';
import { SessionValidation } from "../../utils/sessionValidation";
import LoggedInButtons from "./loggedInButtons";
import LoggedOutButton from "./loggedOutButtons";

export default async function UserOptions(){

  const { isAuth } = await SessionValidation();
    return (

            <div className="ml-auto flex items-center gap-4">
            {
              isAuth ? <LoggedInButtons/> : <LoggedOutButton/>
            }
            </div>
    );
}