import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { supabaseAdmin } from "./supabaseServer";
import { getPricebySub, getProductbyId } from "./stripe";
export type UserProduct = {
  planActive: boolean;
  subscriptionId: string;
  activePriceId: string;
  product: string;
  description: string;
}
export type SessionValidationType = {
    user_id: string;
    email: string;
    firstname: string;
    lastname: string;
    isAuth: boolean;
    profilePicture: string;
    subscriptions: UserProduct[];
}
export async function SessionValidation(isProduct = false): Promise<SessionValidationType>{
    let user_id = '' 
    let email= '';
    let firstname = '';
    let lastname = '';
    let isAuth:boolean = false;
    let profilePicture: string = '';
    let subscriptions: UserProduct[] = [];

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
      const {  data: customer, error } = await supabaseAdmin()
            .from('stripe_customers')
            .select('plan_active, subscription_id')
            .eq('user_id', user_id).eq('plan_active', true).order('id');
            if(customer){
                  const productsPromise = customer.map(async item => {
                  const subscriptionId = item?.subscription_id;
                  const planActive = item?.plan_active;
                  const priceInfo = await getPricebySub(subscriptionId);
                  const productInfo = await getProductbyId(priceInfo ? priceInfo.productId : '' );
                  return {
                    planActive,
                    subscriptionId,
                    activePriceId: priceInfo?.priceId,
                    product: productInfo.name,
                    description: productInfo.description,
                  } as UserProduct;
              });
              subscriptions = await Promise.all(productsPromise);
            }
    }
    return {
        user_id,
        email,
        firstname,
        lastname,
        isAuth,
        profilePicture,
        subscriptions
    } as SessionValidationType;
     
}