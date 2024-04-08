//TODO: Make the courses purchaseble in stripe and update database

import Image from "next/image";
import Link from "next/link";

export default function Courses(){
    return(
        <div id="courses">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="grid text-center items-center gap-6 px-4 md:px-6 lg:gap-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cursos</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500/relaxed dark:text-gray-400">
                        Aprenda a construir sites e aplicações web do design frontend aos bancos de dados backend, nós temos tudo o que você precisa.
                    </p>
                </div>
                <div className="grid mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-2">
                    <Image
                        alt="Image"
                        className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                        height="280"
                        src="/placeholder.svg"
                        width="500"
                    />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Fundamentos de Desenvolvimento de Software</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Aprenda os fundamentos do desenvolvimento de software com este curso fácil de seguir. 
                        </p>
                    </div>
                    </div>
                    <div className="space-y-2">
                    <Image
                        alt="Image"
                        className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                        height="280"
                        src="/placeholder.svg"
                        width="500"
                    />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Web com Typescript</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Aprenda a criar aplicações rápidas e confiáveis com Typescript.
                        </p>
                    </div>
                    </div>
                    <div className="space-y-2">
                    <Image
                        alt="Image"
                        className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                        height="280"
                        src="/placeholder.svg"
                        width="500"
                    />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Clean Archtechture</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Mergulhe neste padrão de arquitetura com nosso guia passo a passo.
                        </p>
                    </div>
                    </div>
                   
                </div>
                <div className="mx-auto">
                        <p className="text-xl font-bold text-gray-500 dark:text-gray-400">Quer aproveitar e levar logo tudo de uma vez?</p>
                        <Link href='#assinar' className="btn btn-accent text-xl mt-5 w-64">Saiba mais</Link>
                    </div>
                </div>
            </section>
        </div>
    ) 
}