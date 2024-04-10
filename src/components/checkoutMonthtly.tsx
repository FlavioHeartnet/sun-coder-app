'use client';

import { loadStripe } from '@stripe/stripe-js';
import { supabase } from '../../utils/supabaseClient';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';


export default function CheckoutMonthly() {
  const router = useRouter();
  const [pending, setPending ] = useState(false);
  const handleCheckout = async() => {
    setPending(true);
    const responseAuth = await fetch('/api/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { user_id, isAuth } = await responseAuth.json();

    if (!isAuth) {
      setPending(false);
      router.push('/api/auth/login?post_login_redirect_url=/monthlyCheckout');
      return;
    }

    const {  data: customer } = await supabase
            .from('stripe_customers')
            .select('plan_active')
            .eq('user_id', user_id).order('id', {ascending: false}).single();

    if(customer?.plan_active){
      toast.error('Você já possui uma assinatura ativa!');
      setPending(false);
      return;
    }
    router.push('/monthlyCheckout');
  }

  return (
    
        <Button disabled={pending} onClick={handleCheckout} size="lg" variant="outline">
                Assinar Mensal
        </Button>
   
  );
}