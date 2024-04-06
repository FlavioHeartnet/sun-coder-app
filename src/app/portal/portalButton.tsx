'use client';

import { createPortalSession } from './portalAction';
import { supabase } from './../../../utils/supabaseClient';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { useState } from 'react';

export default function PortalButton() {
  const [ pending, setPending ] = useState(false);
  const handleClick = async () => {
    try {
      setPending(true);
      const response = await fetch('/api/auth', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { user_id } = await response.json();
      if (!user_id) {
        setPending(false);
        throw 'Please log in to manage your billing.';
      }
      const { data: customer, error: fetchError } = await supabase
      .from('stripe_customers')
      .select('stripe_customer_id, plan_active')
      .eq('user_id', user_id)
      .order('created_at', { ascending: false } as any)
      .single();
    
      if(customer?.plan_active){
        const { url } = await createPortalSession(customer?.stripe_customer_id);
        setPending(false);
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
        <button disabled={pending} onClick={handleClick} className="flex items-center gap-2 text-sm font-medium [&:hover]:underline disabled:text-zing-600 disabled:cursor-progress" >
            <Image src='/gear.svg' className="dark:invert" alt={""} width={15} height={15} />
            <span>Gerenciar Pagamentos</span>
        </button>
    </>
  );
}