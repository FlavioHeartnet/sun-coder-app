'use client';

import { loadStripe } from '@stripe/stripe-js';
import { supabase } from './../../utils/supabaseClient';
import toast from 'react-hot-toast';


export default function CheckoutButton() {
  const handleCheckout = async() => {
    const { data } = await supabase.auth.getUser();

    if (!data?.user) {
      toast.error("Please log in to create a new Stripe Checkout session");
      return;
    }

    const {  data: customer } = await supabase
            .from('stripe_customers')
            .select('plan_active')
            .eq('user_id', data.user.id).order('id', {ascending: false}).single();
    if(customer?.plan_active){
      toast.error('You already have an active subscription!!');
      return;
    }
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: 'price_1P0uQlE8qUMXaBnMcngZEGta', userId: data.user?.id, email: data.user?.email }),
      });
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  }

  return (
    <div>

      <button className="btn btn-accent mt-2 w-64" onClick={handleCheckout}>Buy Now</button>
    </div>
  );
}