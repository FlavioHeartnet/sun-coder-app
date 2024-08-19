'use client';
import {motion as m} from 'framer-motion';
import { AnimatePresence } from "framer-motion";

export default function HomeIntro(){
    function handleAnchorClick(event: { preventDefault: () => void; }, id: string) {
        event.preventDefault(); // Prevent default jump behavior
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      
    return (
     
      
      <AnimatePresence>  
        <m.div className='justify-center min-h-screen bg-black'
            initial={{opacity:0}} 
            animate={{opacity:1, y: 0}} 
            transition={{duration:0.45}}
        >
          <video src={require('./../../public/banner.mp4')} autoPlay muted loop className='video w-full'/>
          <section className="w-full h-full py-12 md:py-24 lg:py-32 xl:py-48 absolute z-10">
          <div className="grid h-full items-center justify-center gap-6 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-white text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Aprenda desenvolvimento de aplicações web<br/> <span className='text-[#eab308]'>rápido</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Suncoder é uma plataforma com conteúdos <span className='text-[#eab308]'>extremamente rápidos</span> e <span className='text-[#ec4899]'>muito descontraídos</span> para aprimorar suas habilidades de programação.
              </p>
              <a onClick={(event) => handleAnchorClick(event, 'courses')} className="btn btn-accent text-xl mt-2 w-64">Saiba mais</a>
            </div>
          </div>
        </section> 
        </m.div>
      </AnimatePresence>
    )
}