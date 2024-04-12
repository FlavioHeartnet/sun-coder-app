import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { supabaseAdmin } from "./supabaseServer";
import { getPricebySub } from "./stripe";
export type SessionValidationType = {
    user_id: string;
    email: string;
    firstname: string;
    lastname: string;
    isAuth: boolean;
    
    profilePicture: string;
    products: [
      {
        planActive: boolean;
        subscriptionId: string;
        activePriceId: string;
        product: string;
        description: string;
      }
    ];
}
export async function SessionValidation(isProduct = false): Promise<SessionValidationType>{
    let user_id = '' 
    let email= '';
    let firstname = '';
    let lastname = '';
    let isAuth:boolean = false;
    let profilePicture: string = '';
    let products = [];

    const {
      getUser,
      isAuthenticated
    } = getKindeServerSession();
    const user = await getUser();
    user_id = user?.id || '';
    email = user?.email || '';
    firstname = user?.given_name || '';
    lastname = user?.family_name || '';
    profilePicture = user?.picture || '';
    
    if(await isAuthenticated()) isAuth = true;
    if(isProduct){
      const {  data: customer, error } = await supabaseAdmin
            .from('stripe_customers')
            .select('plan_active, subscription_id')
            .eq('user_id', user_id).eq('plan_active', true).order('id');
            if(customer){
              customer.forEach(async item => {
                const subscriptionId = item?.subscription_id;
                let activePriceId = '';
                let product;
                let description;
                const planActive = item?.plan_active;
                activePriceId = await getPricebySub(subscriptionId);
                //TODO create a return for product
                products.push({
                  planActive,
                  subscriptionId,
                  activePriceId,
                });
              });
              
              
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
        activePriceId,
        profilePicture
    }
     
}