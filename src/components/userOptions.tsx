'use server';
import { getUserInfoAction } from "@/app/actions/getUserInfoAction";
import LoggedInButtons from "./loggedInButtons";
import LoggedOutButton from "./loggedOutButtons";

export default async function UserOptions(){

  const { isAuth, user_id } = await getUserInfoAction(false);
    return (

            <div className="ml-auto flex items-center gap-4">
            {
              isAuth ? <LoggedInButtons user_id={user_id}/> : <LoggedOutButton/>
            }
            </div>
    );
}