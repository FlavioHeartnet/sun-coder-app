import Link from "next/link";

export default function TermsOfService(){
    return(
        <div className="min-h-screen w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Termos de Serviço</h1>
            <p className="mt-4 text-muted-foreground">Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Responsabilidades do Usuário</h2>
              <p className="mt-2 text-muted-foreground">
                Ao usar nossos serviços, você concorda em usá-los de forma responsável e em conformidade com todas as leis
                e regulamentos aplicáveis. Você é responsável por manter a segurança da sua conta e por qualquer atividade
                que ocorra sob sua conta.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Propriedade Intelectual</h2>
              <p className="mt-2 text-muted-foreground">
                Todo o conteúdo e materiais em nossa plataforma são propriedade da nossa empresa ou de nossos licenciadores.
                Você não pode modificar, copiar, distribuir, transmitir, exibir, reproduzir ou criar trabalhos derivados
                do conteúdo sem nosso consentimento prévio por escrito.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Política de Privacidade</h2>
              <p className="mt-2 text-muted-foreground">
                Levamos a privacidade de nossos usuários a sério. Nossa política de privacidade descreve como coletamos,
                usamos e protegemos suas informações pessoais. Você pode revisar nossa política de privacidade completa
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  aqui.
                </Link>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Resolução de Disputas</h2>
              <p className="mt-2 text-muted-foreground">
                Quaisquer disputas decorrentes destes termos de serviço serão resolvidas através de arbitragem vinculativa
                de acordo com as regras da Associação Americana de Arbitragem. A arbitragem será conduzida em inglês.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}