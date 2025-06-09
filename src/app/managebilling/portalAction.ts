'use server';
import { SupabaseAdapter } from "@/core/infra/supabase/supabaseAdapter";
import {createPortalSession} from "../../../utils/stripe";
import {IDbUseCases} from "@/core/infra/IDbUseCases";


export async function getPortalURL(customerId: string) {
    return createPortalSession(customerId);
}

export const getBillingPortalData = async (user_id:string) => {
  'use server';
  const db: IDbUseCases = new SupabaseAdapter();
  return await db.getBillingData(user_id);
}
