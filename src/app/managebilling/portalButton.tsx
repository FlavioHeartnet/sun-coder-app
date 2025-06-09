'use client';

import { getPortalURL, getBillingPortalData } from './portalAction';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function PortalButton({user_id}: {user_id: string}) {
  const [ pending, setPending ] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isPlanActive, setisPlanActive] = useState(false);

  useEffect(()=>{
    async function getCustomerPlan(){
      setisPlanActive((await getBillingPortalData(user_id))?.plan_active);
      setLoading(false);
    }
    getCustomerPlan();
  });
  const handleClick = async () => {
    try {
      setPending(true);
      
      if (user_id === '') {
        setPending(false);
        toast.error( 'Por favor, acesse sua conta para gerenciar sua fatura.');
      }
      const { plan_active, stripe_customer_id} = await getBillingPortalData(user_id);
      if(plan_active){
        const { url } = await getPortalURL(stripe_customer_id);
        setPending(false);
        window.location.href = url;
        return
      }
      
      toast.error('Atualize seu plano para gerenciar sua faturamento.');
      
      

    } catch (error) {
      console.error(error);
      toast.error('Configurações do Portal de Cobrança Incompletas.');
    }
    setPending(false);
  }

  return (
    <>
      {
        isPlanActive ? <button disabled={pending} onClick={handleClick} className="flex items-center gap-2 text-sm font-medium [&:hover]:underline disabled:text-zing-600 disabled:cursor-progress" >
        <Image src='/gear.svg' className="dark:invert" alt={""} width={15} height={15} />
        <span>Gerenciar Assinatura</span>
      </button> 
      : loading ?
        <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="mb-3"
            >
              <Loader2 className="w-8 h-8 dark" />
        </motion.div>
        : <Link className="flex items-center gap-2 text-sm font-medium [&:hover]:underline" href="#assinar">
              <Image src='/gear.svg' className="dark:invert" alt={""} width={15} height={15} />
              <span className="hidden md:block">Assinar Pro</span>
        </Link>
      }
        
    </>
  );
}