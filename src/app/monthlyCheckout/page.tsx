//TODO: Verify if the the user has a plan and if this purchase is the same redirect to home, if it's a different product redirect to checkout!
'use client';
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import toast from "react-hot-toast";
export default function MontlyCheckout(){
  const handleCheckout = async() => {

    const responseAuth = await fetch(process.env.NEXT_PUBLIC_BASE_URL_API+'/api/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { user_id, email, isAuth } = await responseAuth.json();
    console.log('id: '+user_id);
    if (isAuth) {
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      const stripe = await stripePromise;
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL_API+'/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ priceId: 'price_1P0uQlE8qUMXaBnMcngZEGta', userId: user_id, email: email }),
        });
      const session = await response.json();
      await stripe?.redirectToCheckout({ sessionId: session.id });
    }
  }
  useEffect(() => {
    toast.promise(
      handleCheckout(),
       {
         loading: 'redirecionando...',
         success: <b>Sucesso!</b>,
         error: <b>Não foi possivel redirecionar para o checkout no momento!.</b>,
       }
     );
  },[]);
    return(
        <h1>Redirecionando para o checkout...</h1>
    ) 
}