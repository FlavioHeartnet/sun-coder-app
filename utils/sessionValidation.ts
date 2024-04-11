import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { supabaseAdmin } from "./supabaseServer";

export async function SessionValidation(){
    let  user_id = '' 
    let email= '';
    let isAuth:boolean = false;
    let planActive:boolean = false;
    let subscriptionId:string = '';
    let activePriceId:string = '';
  const supabase = supabaseAdmin();
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
        // !deprecated - but still here because the decision to use of kinde auth is not final
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (!user || userError) {
            throw 'supabase auth error';
        }
       [ user_id, email ] =  [user.id, user.email || ''];
       if(user.id) isAuth = true;
    }
    const {  data: customer } = await supabase
            .from('stripe_customers')
            .select('plan_active, subscription_id')
            .eq('user_id', user_id).order('id', {ascending: false}).single();
            if(customer?.subscription_id){
              subscriptionId = customer?.subscription_id;
              planActive = customer?.plan_active;
              const priceResp = await fetch('https://api.stripe.com/v1/subscriptions/'+subscriptionId, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer "+process.env.STRIPE_SECRET_KEY
                },
              })
              if(priceResp.ok){
                const priceData = await priceResp.json();
                activePriceId = priceData.items.data[0].price.id;
                
              }
              
            }
    

    return [ user_id, email, isAuth, planActive, subscriptionId, activePriceId];
     
}