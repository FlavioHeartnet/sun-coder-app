//TODO: Refactor this to get priceId dynamically from the db.

'use client';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';


export default function CheckoutYearly() {
  const router = useRouter();
  const [pending, setPending ] = useState(false);
  const handleCheckout = async() => {
    setPending(true);
    const responseAuth = await fetch(process.env.NEXT_PUBLIC_BASE_URL_API+'/api/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { isAuth, activePriceId } = await responseAuth.json();

    if (!isAuth) {
      router.push('/api/auth/login?post_login_redirect_url=/yearlyCheckout');
      return;
    }

    if(process.env.NEXT_PUBLIC_YEARLY_STRIPE_SUBSCRIPTION_PRICE_ID == activePriceId){
      toast.error('Você já possui essa assinatura ativa!');
      setPending(false);
      return;
    }
    router.push('/yearlyCheckout');
  }

  return (
    
        <Button disabled={pending} onClick={handleCheckout} size="lg">
                Assinar Anual
        </Button>
   
  );
}