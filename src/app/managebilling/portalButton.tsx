'use client';

import { createPortalSession, getBillingPortalData } from './portalAction';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { useState } from 'react';

export default function PortalButton() {
  const [ pending, setPending ] = useState(false);
  
  const handleClick = async () => {
    try {
      setPending(true);
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL_API+'/api/auth', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { user_id } = await response.json();
      if (!user_id) {
        setPending(false);
        throw 'Por favor, acesse sua conta para gerenciar sua fatura.';
      }
      const customer = await getBillingPortalData(user_id);
      if(customer?.plan_active){
        const { url } = await createPortalSession(customer?.stripe_customer_id);
        setPending(false);
        window.location.href = url;
      }else{
        toast.error('Atualize seu plano para gerenciar sua faturamento.');
      }
      

    } catch (error) {
      console.error(error);
      toast.error('Configurações do Portal de Cobrança Incompletas.');
    }
    setPending(false);
  }

  return (
    <>
        <button disabled={pending} onClick={handleClick} className="flex items-center gap-2 text-sm font-medium [&:hover]:underline disabled:text-zing-600 disabled:cursor-progress" >
            <Image src='/gear.svg' className="dark:invert" alt={""} width={15} height={15} />
            <span>Gerenciar Faturamento</span>
        </button>
    </>
  );
}