'use client';

import { loadStripe } from '@stripe/stripe-js';
import { supabase } from '../../utils/supabaseClient';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Button } from './ui/button';


export default function CheckoutMonthly() {
  const [pending, setPending ] = useState(false);
  const handleCheckout = async() => {
    setPending(true);
    const responseAuth = await fetch('/api/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { user_id, email } = await responseAuth.json();

    if (!user_id) {
      setPending(false);
      toast.error("Por favor entre com sua conta ou cadastre-se!!");
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
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: 'price_1P0uQlE8qUMXaBnMcngZEGta', userId: user_id, email: email }),
      });
    const session = await response.json();
    setPending(false);
    await stripe?.redirectToCheckout({ sessionId: session.id });
  }

  return (
    
        <Button disabled={pending} onClick={handleCheckout} size="lg" variant="outline">
                Assinar Mensal
        </Button>
   
  );
}