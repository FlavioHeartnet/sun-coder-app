'use client';
import ValidatingOrder from "@/components/validatingOrder";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { getUserInfoAction } from "../actions/getUserInfoAction";

export default function YearlyCheckout(){
  const router = useRouter();
    const handleCheckout = async() => {
        
        const { user_id, email, isAuth, subscriptions } = await getUserInfoAction();
        if (isAuth) {
            if(subscriptions.find((e) => e.activePriceId == process.env.NEXT_PUBLIC_YEARLY_STRIPE_SUBSCRIPTION_PRICE_ID)){
                toast.error('Você já tem esta assinatura!');
                router.push('/');
            }else{
              const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
              const stripe = await stripePromise;
              const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL_API+'/api/checkout', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ priceId: process.env.NEXT_PUBLIC_YEARLY_STRIPE_SUBSCRIPTION_PRICE_ID, userId: user_id, email: email }),
                });
              const session = await response.json();
              await stripe?.redirectToCheckout({ sessionId: session.id });
            }
        }else{
          router.push(process.env.NEXT_PUBLIC_BASE_URL_API+'/api/auth/login?post_login_redirect_url=/yearlyCheckout');
        }
      }
    useEffect(() => {
      handleCheckout();
    },[])    
           

    return(
        <ValidatingOrder/>
    ) 
}

