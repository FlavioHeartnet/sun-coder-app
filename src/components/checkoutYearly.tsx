//TODO: Refactor this to get priceId dynamically from the db.

'use client';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { getUserInfoAction } from '@/app/actions/getUserInfoAction';


export default function CheckoutYearly() {
  const router = useRouter();
  const [pending, setPending ] = useState(false);
  const handleCheckout = async() => {
    setPending(true);
    
    const { isAuth, products } = await getUserInfoAction();

    if (!isAuth) {
      router.push('/api/auth/login?post_login_redirect_url=/yearlyCheckout');
      return;
    }

    if(products.find((e) => e.activePriceId == process.env.NEXT_PUBLIC_YEARLY_STRIPE_SUBSCRIPTION_PRICE_ID)){
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