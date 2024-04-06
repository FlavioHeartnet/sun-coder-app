'use server';
import { supabaseAdmin } from "../../utils/supabaseServer";
import LoggedInButtons from "./loggedInButtons";
import LoggedOutButton from "./loggedOutButtons";

export default async function UserOptions(){
const supabase = supabaseAdmin()

  const { data, error } = await supabase.auth.getUser()
    return (

            <div className="ml-auto flex items-center gap-4">
            {
              error || !data?.user ? <LoggedOutButton/> : <LoggedInButtons/>
            }
            </div>
    );
}