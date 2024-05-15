
import { Link } from "./ui/link";
//TODO: if the user already have a sub, change it to welcome texts -> tbd
export default function CtaProSub(){
    return(
        <section className="py-24 px-4 md:px-8">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-4">Seja Assinante Pro</h1>
            <p className="text-lg mb-8">Tenha acesso a todos os treinamentos da plataforma por apenas R$49.90 por mês.</p>
            <Link variant="teal">Assinatura Pro</Link>
          </div>
        </section>
    )
}