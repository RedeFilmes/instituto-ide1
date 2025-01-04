function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl" data-name="privacy-policy">
            <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
            
            <div className="prose prose-lg">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">1. Coleta de Informações</h2>
                    <p className="mb-4">
                        Coletamos informações quando você se registra em nosso site, se inscreve em um curso, 
                        preenche formulários ou interage com nossos serviços. As informações coletadas incluem:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Nome completo</li>
                        <li>Endereço de e-mail</li>
                        <li>Número de telefone</li>
                        <li>CPF e RG</li>
                        <li>Endereço residencial</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">2. Uso das Informações</h2>
                    <p className="mb-4">
                        As informações que coletamos são utilizadas para:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Processar matrículas e inscrições</li>
                        <li>Enviar comunicações sobre o curso</li>
                        <li>Emitir certificados</li>
                        <li>Melhorar nossos serviços</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">3. Proteção das Informações</h2>
                    <p className="mb-4">
                        Implementamos medidas de segurança adequadas para proteger suas informações pessoais 
                        contra acesso não autorizado, alteração, divulgação ou destruição.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
                    <p className="mb-4">
                        Utilizamos cookies para melhorar sua experiência em nosso site. Você pode optar por 
                        desabilitar os cookies através das configurações do seu navegador.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">5. Compartilhamento de Informações</h2>
                    <p className="mb-4">
                        Não vendemos, comercializamos ou transferimos suas informações pessoais para terceiros. 
                        Isso não inclui terceiros confiáveis que nos auxiliam na operação do site e na 
                        prestação de serviços.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">6. Seus Direitos</h2>
                    <p className="mb-4">
                        Você tem direito a:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Acessar seus dados pessoais</li>
                        <li>Corrigir dados incorretos</li>
                        <li>Solicitar a exclusão de seus dados</li>
                        <li>Retirar seu consentimento</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
