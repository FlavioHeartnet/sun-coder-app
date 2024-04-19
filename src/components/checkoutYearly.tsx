//TODO: Refactor this to get priceId dynamically from the db.

'use client';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { getUserInfoAction } from '@/app/actions/getUserInfoAction';
import { UserProduct } from '../../utils/sessionValidation';


export default function CheckoutYearly(data: { products:UserProduct[] }){
  const router = useRouter();
  const [textButton ,setText] = useState('Assinar Anual');
  const [pending, setPending ] = useState(true);
  
  useEffect(() => {
    if(data){
      if(data.products.find((e) => e.activePriceId == process.env.NEXT_PUBLIC_YEARLY_STRIPE_SUBSCRIPTION_PRICE_ID)){
        setText('Assinatura Ativa');
      }else{
        setPending(false);
      }
    }
  }, [])
  

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
               {textButton}
        </Button>
   
  );
}