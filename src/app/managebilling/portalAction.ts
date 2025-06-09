'use server';
import { db } from "@/core/infra/supabase/supabaseAdapter";
import {createPortalSession} from "../../../utils/stripe";


export async function getPortalURL(customerId: string) {
    return createPortalSession(customerId);
}

export const getBillingPortalData = async (user_id:string) => {
  'use server';
  return await db.getBillingData(user_id);
}
