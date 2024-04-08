import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { supabaseAdmin } from "./supabaseServer";

export async function SessionValidation(){
    let  user_id = '' 
    let email= '';
    let isAuth:boolean = false;
    const isKindeAuth = true;
    if(isKindeAuth){
      const {
        getUser,
        isAuthenticated
      } = getKindeServerSession();
      const user = await getUser();
      user_id = user?.id || '';
      email = user?.email || '';
      if(await isAuthenticated()) isAuth = true;
    }else {
        const { data: { user }, error: userError } = await supabaseAdmin().auth.getUser();
        if (!user || userError) {
            throw 'supabase auth error';
        }
       [ user_id, email ] =  [user.id, user.email || ''];
       if(user.id) isAuth = true;
    }

    return [ user_id, email, isAuth ];
     
}