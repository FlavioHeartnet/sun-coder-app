//TODO: Refactor this to get priceId dynamically from the db.

'use client';
import { loadStripe } from '@stripe/stripe-js';
import { supabase } from '../../utils/supabaseClient';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Button } from './ui/button';


export default function CheckoutYearly() {
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
      toast.error("Please log in to create a new Stripe Checkout session");
      return;
    }

    const {  data: customer } = await supabase
            .from('stripe_customers')
            .select('plan_active')
            .eq('user_id', user_id).order('id', {ascending: false}).single();

    if(customer?.plan_active){
      toast.error('You already have an active subscription!!');
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
        body: JSON.stringify({ priceId: 'price_1P2buSE8qUMXaBnMEyTekxjQ', userId: user_id, email: email }),
      });
    const session = await response.json();
    setPending(false);
    await stripe?.redirectToCheckout({ sessionId: session.id });
  }

  return (
    
        <Button disabled={pending} onClick={handleCheckout} size="lg">
                Assinar Anual
        </Button>
   
  );
}