import {Login} from "./../components/login"
import { supabase } from "../../utils/supabaseClient";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export default function Home() {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser(token?.value);
      if (user) {
        redirect('/home');
      }
    }
    getUser();

  return (
      <Login/>
  );
}
