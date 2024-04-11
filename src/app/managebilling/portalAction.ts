'use server';

import { stripe } from "../../../utils/stripe";
import { supabaseAdmin } from "../../../utils/supabaseServer";


export async function createPortalSession(customerId: string) {
    const portalSession = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL_API}`,
      });
  
      return { id: portalSession.id, url: portalSession.url };
}

export const getBillingPortalData = async (user_id:string) => {
  'use server';
  const { data: customer, error: fetchError } = await supabaseAdmin()
    .from('stripe_customers')
    .select('stripe_customer_id, plan_active')
    .eq('user_id', user_id)
    .order('created_at', { ascending: false } as any)
    .single();

    return customer;
}
