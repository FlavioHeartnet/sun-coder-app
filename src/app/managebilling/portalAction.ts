'use server';
import {createPortalSession} from "../../../utils/stripe";
import {IDbUseCases} from "@/core/infra/IDbUseCases";


export async function getPortalURL(customerId: string) {
    return createPortalSession(customerId);
}

export const getBillingPortalData = async (user_id:string, db: IDbUseCases) => {
  'use server';
  return await db.getBillingData(user_id);
}
