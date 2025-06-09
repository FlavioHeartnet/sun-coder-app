'use client';

import { getPortalURL, getBillingPortalData } from './portalAction';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getUserInfoAction } from '../actions/getUserInfoAction';
import Link from 'next/link';
import {SupabaseAdapter} from "@/core/infra/supabase/supabaseAdapter";

export default function PortalButton() {
  const [ pending, setPending ] = useState(false);
  const [isPlanActive, setisPlanActive] = useState(false);
  const [user_id, setUser_id] = useState("");

  useEffect(()=>{
    async function getCustomerPlan(){
      setUser_id((await getUserInfoAction(false)).user_id);
      setisPlanActive((await getBillingPortalData(user_id, new SupabaseAdapter()))?.plan_active);
    }
    getCustomerPlan();
  }, [user_id, isPlanActive]);
  const handleClick = async () => {
    try {
      setPending(true);
      
      if (!user_id) {
        setPending(false);
        toast.error( 'Por favor, acesse sua conta para gerenciar sua fatura.');
      }
      const customer = await getBillingPortalData(user_id, new SupabaseAdapter());
      if(customer?.plan_active){
        const { url } = await getPortalURL(customer?.stripe_customer_id);
        console.log("redirect:" +url)
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
      {
        isPlanActive ? <button disabled={pending} onClick={handleClick} className="flex items-center gap-2 text-sm font-medium [&:hover]:underline disabled:text-zing-600 disabled:cursor-progress" >
        <Image src='/gear.svg' className="dark:invert" alt={""} width={15} height={15} />
        <span>Gerenciar Assinatura</span>
      </button> 
      : 
        <Link className="flex items-center gap-2 text-sm font-medium [&:hover]:underline" href="#assinar">
              <Image src='/gear.svg' className="dark:invert" alt={""} width={15} height={15} />
              <span className="hidden md:block">Assinar Pro</span>
        </Link>
      }
        
    </>
  );
}