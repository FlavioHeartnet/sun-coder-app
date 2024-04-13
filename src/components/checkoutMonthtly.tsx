'use client';

import toast from 'react-hot-toast';
import { useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { getUserInfoAction } from '@/app/actions/getUserInfoAction';


export default function CheckoutMonthly() {
  const router = useRouter();
  const [pending, setPending ] = useState(false);
  const handleCheckout = async() => {
    setPending(true);
    
    const { isAuth, products } = await getUserInfoAction();

    if (!isAuth) {
      router.push('/api/auth/login?post_login_redirect_url=/monthlyCheckout');
      return;
    }

    if(products.find((e) => e.activePriceId == process.env.NEXT_PUBLIC_MONTHLY_STRIPE_SUBSCRIPTION_PRICE_ID)){
      toast.error('Você já possui essa assinatura ativa!');
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