import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { supabaseAdmin } from "./supabaseServer";
export type SessionValidationType = {
    user_id: string;
    email: string;
    firstname: string;
    lastname: string;
    isAuth: boolean;
    planActive: boolean;
    subscriptionId: string;
    activePriceId: string;
}
export async function SessionValidation(isProduct = false): Promise<SessionValidationType>{
    let user_id = '' 
    let email= '';
    let firstname = '';
    let lastname = '';
    let isAuth:boolean = false;
    let planActive:boolean = false;
    let subscriptionId:string = '';
    let activePriceId:string = '';

    const {
      getUser,
      isAuthenticated
    } = getKindeServerSession();
    const user = await getUser();
    user_id = user?.id || '';
    email = user?.email || '';
    firstname = user?.given_name || '';
    lastname = user?.family_name || '';
    if(await isAuthenticated()) isAuth = true;
    if(isProduct){
      const {  data: customer } = await supabaseAdmin
            .from('stripe_customers')
            .select('plan_active, subscription_id')
            .eq('user_id', user_id).order('id').single();
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
    }
    return {
        user_id,
        email,
        firstname,
        lastname,
        isAuth,
        planActive,
        subscriptionId,
        activePriceId
    }
     
}