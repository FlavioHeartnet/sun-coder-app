import {BillingData, IDbUseCases} from "../IDbUseCases";
import {supabaseAdmin} from "./supabaseServer";

export class SupabaseAdapter implements IDbUseCases{
    async getBillingData(user_id: string): Promise<BillingData> {
        const { data: customer, error: fetchError } = await supabaseAdmin()
            .from('stripe_customers')
            .select('stripe_customer_id, plan_active')
            .eq('user_id', user_id).eq('plan_active', true)
            .order('created_at')
            .single();
        if(!customer){
            throw new Error("Customer not found");
        }
        return customer;
    }

}
export const db = new SupabaseAdapter();