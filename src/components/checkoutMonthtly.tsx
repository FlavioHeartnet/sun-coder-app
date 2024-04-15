'use client';

import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { getUserInfoAction } from '@/app/actions/getUserInfoAction';


export default function CheckoutMonthly() {
  const router = useRouter();
  const [textButton ,setText] = useState('Assinar Mensal');
  const [pending, setPending ] = useState(true);

  useEffect(() => {
    getUserInfoAction().then(async (data) => {
      if(data.products.find((e) => e.activePriceId == process.env.NEXT_PUBLIC_MONTHLY_STRIPE_SUBSCRIPTION_PRICE_ID)){
        setText('Assinatura Ativa');
      }else{
        setPending(false);
      }
    });
  }, []);
  const handleCheckout = async() => {
    setPending(true);
    
    const { isAuth } = await getUserInfoAction();

    if (!isAuth) {
      router.push('/api/auth/login?post_login_redirect_url=/monthlyCheckout');
      return;
    }
    router.push('/monthlyCheckout');
  }

  return (
    
        <Button disabled={pending} onClick={handleCheckout} size="lg" variant="outline">
                {textButton}
        </Button>
   
  );
}