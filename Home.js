function Home({ navigateTo }) {
    const teamMembers = [
        {
            name: "ADELSON AQUINO",
            role: "Presidente",
            image: "img/pres.jpeg",
            description: "Doutor em Educação com mais de 20 anos de experiência em gestão educacional."
        },
        {
            name: "ROSANA AQUINO",
            role: "Vice-Presidente",
            image: "img/vise pre.jpeg",
            description: "Especialista em administração escolar e desenvolvimento de currículos."
        },
        {
            name: "ÉRIKA PEIXOTO",
            role: "Diretora Geral",
            image: "img/Dir.jpeg",
            description: "Mestre em Gestão Educacional com foco em inovação pedagógica."
        },
        {
            name: "TIAGO PEIXOTO",
            role: "Fiscalização",
            image: "img/Fis.jpeg",
            description: "Responsável pela supervisão e conformidade dos processos educacionais."
        },
        {
            name: "RICARDO SILVA",
            role: "Fiscalização",
            image: "img/ba.jpeg",
            description: "Especialista em avaliação e qualidade do ensino técnico."
        }
    ];

    const handleEnroll = (course) => {
        try {
            navigateTo('/registration', { course });
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="home-page">
            <section className="hero-section flex items-center justify-center text-white text-center" data-name="hero">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Instituto IDE
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Sua jornada profissional começa aqui
                    </p>
                    <button 
                        onClick={() => navigateTo('/cursos')}
                        className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600"
                    >
                        Conheça nossos cursos
                    </button>
                </div>
            </section>

            <section className="py-16 bg-gray-50" data-name="about-section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Sobre Nós</h2>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                        O Instituto IDE é referência em educação profissional, formando profissionais qualificados 
                        e preparados para o mercado de trabalho. Nossa equipe de gestão é composta por 
                        profissionais altamente capacitados e comprometidos com a excelência em educação.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
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
                </div>
            </section>

            <section className="py-16" data-name="features-section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Por que escolher o Instituto IDE?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="text-4xl mb-4 text-green-500">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Cursos Reconhecidos</h3>
                            <p className="text-gray-600">
                                Todos os nossos cursos são reconhecidos pelo MEC e órgãos competentes
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl mb-4 text-green-500">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Professores Qualificados</h3>
                            <p className="text-gray-600">
                                Profissionais experientes e altamente qualificados
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl mb-4 text-green-500">
                                <i className="fas fa-clock"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Horários Flexíveis</h3>
                            <p className="text-gray-600">
                                Turmas em diversos horários para sua conveniência
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50" data-name="courses-section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Cursos em Destaque</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.slice(0, 3).map(course => (
                            <CourseCard 
                                key={course.id} 
                                course={course}
                                onEnroll={handleEnroll}
                            />
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button 
                            onClick={() => navigateTo('/cursos')}
                            className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600"
                        >
                            Ver Todos os Cursos
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
