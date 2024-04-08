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
        <m.div className='min-h-screen'
            initial={{opacity:0, y: "30%"}} 
            animate={{opacity:1, y: 0}} 
            transition={{duration:0.45}}
        >
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              A plataforma essencial para aprender<br/> desenvolvimento web
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Aprenda desenvolvimento web do zero a produção. 
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <a onClick={(event) => handleAnchorClick(event, 'courses')} className="btn btn-accent text-xl mt-2 w-64">Bora começar!!</a>
          </div>
        </div>
      </section> 
      </m.div>
      </AnimatePresence>
    )
}