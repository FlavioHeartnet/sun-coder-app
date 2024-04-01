'use client';

import { createPortalSession } from './portalAction';
import { supabase } from './../../../utils/supabaseClient';
import toast from 'react-hot-toast';

export default function PortalButton() {
  const handleClick = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw 'Please log in to manage your billing.';
      }
      const { data: customer, error: fetchError } = await supabase
      .from('stripe_customers')
      .select('stripe_customer_id, plan_active')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false } as any)
      .single();
    
      if(customer?.plan_active){
        const { url } = await createPortalSession(customer?.stripe_customer_id);
        window.location.href = url;
      }else{
        toast.error('Please upgrade your plan to manage your billing.');
      }
      

    } catch (error) {
      console.error(error);
      toast.error('Failed to create billing portal session:');
    }
  }

  return (
    <>
      <button className="btn btn-primary btn-outline my-3 w-64" onClick={handleClick}>
        Manage Billing
      </button>
    </>
  );
}