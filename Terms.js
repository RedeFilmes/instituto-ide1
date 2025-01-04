function Terms() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl" data-name="terms">
            <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>
            
            <div className="prose prose-lg">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
                    <p className="mb-4">
                        Ao acessar e utilizar este site, você aceita e concorda em cumprir estes termos e 
                        condições de uso. Se você não concordar com qualquer parte destes termos, não deverá 
                        usar nosso site.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">2. Matrícula e Inscrição</h2>
                    <p className="mb-4">
                        Para se matricular em nossos cursos, você deve:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Ter idade mínima de 18 anos</li>
                        <li>Fornecer informações verdadeiras e atualizadas</li>
                        <li>Cumprir com os pré-requisitos específicos de cada curso</li>
                        <li>Efetuar os pagamentos conforme acordado</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">3. Pagamentos e Reembolsos</h2>
                    <p className="mb-4">
                        Os pagamentos devem ser realizados conforme as condições estabelecidas no momento da 
                        matrícula. Reembolsos serão concedidos apenas em casos específicos, conforme nossa 
                        política de reembolso.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">4. Propriedade Intelectual</h2>
                    <p className="mb-4">
                        Todo o conteúdo disponibilizado em nossos cursos e site é protegido por direitos 
                        autorais. Não é permitido copiar, reproduzir ou distribuir o material sem autorização 
                        prévia.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">5. Conduta do Aluno</h2>
                    <p className="mb-4">
                        Os alunos devem:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Manter conduta respeitosa com professores e colegas</li>
                        <li>Cumprir com as atividades e prazos estabelecidos</li>
                        <li>Não compartilhar credenciais de acesso</li>
                        <li>Respeitar as normas de cada curso</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">6. Modificações dos Termos</h2>
                    <p className="mb-4">
                        Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
                        entrarão em vigor imediatamente após sua publicação no site.
                    </p>
                </section>
            </div>
        </div>
    );
}
