
import { Link } from "./ui/link";
export default function CtaProSub({isPlanActive=false}){
    return(
        <section className="py-24 px-4 md:px-8">
          { !isPlanActive ? (<div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-4">Seja Assinante Pro</h1>
            <p className="text-lg mb-8">Tenha acesso a todos os treinamentos da plataforma por apenas R$49.90 por mês.</p>
            <Link variant="teal">Assinatura Pro</Link>
          </div>) : (
            <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-4">Bem vindo, pronto para exponecializar sua carreira?</h1>
            <p className="text-lg mb-8">Abaixo você encontrará todos os nossos cursos, divirta-se ;)</p>
          </div>
          )}
          
          
        </section>
    )
}