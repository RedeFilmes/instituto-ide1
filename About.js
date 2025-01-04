function About() {
    const teamMembers = [
        {
            name: "ADELSON FRAZÃO",
            role: "Presidente",
            image: "https://via.placeholder.com/300x300?text=Presidente",
            description: "Doutor em Educação com mais de 20 anos de experiência em gestão educacional."
        },
        {
            name: "Dra. Maria Santos",
            role: "Vice-Presidente",
            image: "https://via.placeholder.com/300x300?text=Vice-Presidente",
            description: "Especialista em administração escolar e desenvolvimento de currículos."
        },
        {
            name: "Profa. Ana Oliveira",
            role: "Diretora Geral",
            image: "https://via.placeholder.com/300x300?text=Diretora+Geral",
            description: "Mestre em Gestão Educacional com foco em inovação pedagógica."
        },
        {
            name: "Dr. Carlos Pereira",
            role: "Fiscalização",
            image: "https://via.placeholder.com/300x300?text=Fiscalizacao+1",
            description: "Responsável pela supervisão e conformidade dos processos educacionais."
        },
        {
            name: "Prof. Roberto Lima",
            role: "Fiscalização",
            image: "https://via.placeholder.com/300x300?text=Fiscalizacao+2",
            description: "Especialista em avaliação e qualidade do ensino técnico."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8" data-name="about-page">
            <h1 className="text-3xl font-bold mb-8 text-center">Sobre o Instituto IDE</h1>
            
            <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg text-gray-700 mb-6">
                    O Instituto IDE é uma instituição de ensino profissionalizante comprometida com a excelência 
                    em educação e formação profissional. Com mais de uma década de experiência, nos dedicamos 
                    a preparar profissionais qualificados para o mercado de trabalho.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Nossa missão é proporcionar educação profissional de qualidade, combinando teoria e prática, 
                    para formar profissionais competentes e éticos que contribuam positivamente para a sociedade.
                </p>
            </div>

            <h2 className="text-2xl font-bold mb-8 text-center">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div 
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden team-member"
                        data-name="team-member"
                    >
                        <img 
                            src={member.image}
                            alt={member.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-green-600 font-semibold mb-2">{member.role}</p>
                            <p className="text-gray-600">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Nossos Valores</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-3">Excelência</h3>
                        <p className="text-gray-600">
                            Comprometimento com a qualidade em todos os aspectos do ensino.
                        </p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-3">Inovação</h3>
                        <p className="text-gray-600">
                            Busca constante por métodos e tecnologias educacionais atualizadas.
                        </p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-3">Ética</h3>
                        <p className="text-gray-600">
                            Conduta profissional baseada em princípios éticos sólidos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
