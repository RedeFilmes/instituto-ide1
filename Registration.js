function Registration({ courseData }) {
    const [formData, setFormData] = React.useState({
        name: '',
        cpf: '',
        rg: '',
        birthDate: '',
        email: '',
        phone: '',
        address: '',
        course: courseData?.name || ''
    });

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            sendToWhatsApp(formData);
        } catch (error) {
            reportError(error);
            alert('Erro ao enviar formulário. Por favor, tente novamente.');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8" data-name="registration-page">
            <div className="form-container">
                <h2 className="text-2xl font-bold mb-6">Formulário de Inscrição</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Nome Completo:</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">CPF:</label>
                        <input
                            type="text"
                            value={formData.cpf}
                            onChange={(e) => setFormData({...formData, cpf: e.target.value})}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">RG:</label>
                        <input
                            type="text"
                            value={formData.rg}
                            onChange={(e) => setFormData({...formData, rg: e.target.value})}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Data de Nascimento:</label>
                        <input
                            type="date"
                            value={formData.birthDate}
                            onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Email:</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Telefone:</label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Endereço Completo:</label>
                        <textarea
                            value={formData.address}
                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                            className="form-input"
                            rows="3"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Curso:</label>
                        <select
                            value={formData.course}
                            onChange={(e) => setFormData({...formData, course: e.target.value})}
                            className="form-input"
                            required
                        >
                            <option value="">Selecione um curso</option>
                            {courses.map(course => (
                                <option key={course.id} value={course.name}>
                                    {course.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 rounded-lg text-lg hover:bg-green-600"
                    >
                        Enviar Inscrição
                    </button>
                </form>
            </div>
        </div>
    );
}
