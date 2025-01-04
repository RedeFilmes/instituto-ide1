function CourseDetails({ course, navigateTo }) {
    if (!course) {
        return <div>Curso não encontrado</div>;
    }

    const handleEnroll = () => {
        try {
            navigateTo('/registration', { course });
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8" data-name="course-details">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                        src={course.image} 
                        alt={course.name}
                        className="w-full h-96 object-cover"
                        data-name="course-image"
                    />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-4" data-name="course-name">
                            {course.name}
                        </h1>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-4">
                                <div data-name="course-info">
                                    <h2 className="text-xl font-semibold mb-2">Informações do Curso</h2>
                                    <p className="text-gray-600 mb-2">
                                        {course.description}
                                    </p>
                                </div>
                                
                                <div data-name="course-details">
                                    <h3 className="font-semibold">Duração:</h3>
                                    <p className="text-gray-600">{course.duration}</p>
                                    
                                    <h3 className="font-semibold mt-2">Investimento:</h3>
                                    <p className="text-gray-600">{course.price}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4" data-name="course-highlights">
                                <h2 className="text-xl font-semibold mb-2">Destaques do Curso</h2>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Professores especializados</li>
                                    <li>Material didático incluso</li>
                                    <li>Aulas práticas em laboratório</li>
                                    <li>Certificado reconhecido</li>
                                    <li>Estágio supervisionado</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center border-t pt-6" data-name="enrollment-section">
                            <div>
                                <p className="text-2xl font-bold text-green-600">
                                    {course.price}
                                </p>
                                <p className="text-gray-600">
                                    Material didático incluso
                                </p>
                            </div>
                            <button
                                onClick={handleEnroll}
                                className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600"
                                data-name="enroll-button"
                            >
                                Inscreva-se Agora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
