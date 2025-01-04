function Profile({ user, setUser }) {
    const [loading, setLoading] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false);
    const [loginData, setLoginData] = React.useState({
        email: '',
        password: ''
    });
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        address: '',
        cep: '',
        houseNumber: '',
        complement: '',
        reference: '',
        age: '',
        bankAccount: {
            bank: '',
            agency: '',
            account: '',
            type: ''
        }
    });

    React.useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                password: '',
                address: user.address || '',
                cep: user.cep || '',
                houseNumber: user.houseNumber || '',
                complement: user.complement || '',
                reference: user.reference || '',
                age: user.age || '',
                bankAccount: user.bankAccount || {
                    bank: '',
                    agency: '',
                    account: '',
                    type: ''
                }
            });
        }
    }, [user]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const loggedUser = await login(loginData.email, loginData.password);
            setUser(loggedUser);
        } catch (error) {
            reportError(error);
            alert('Erro ao fazer login: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (user) {
                const updatedUser = await updateUser(user.id, formData);
                setUser(updatedUser);
                setIsEditing(false);
            } else {
                const newUser = await register(formData);
                setUser(newUser);
            }
            alert('Perfil atualizado com sucesso!');
        } catch (error) {
            reportError(error);
            alert('Erro ao atualizar perfil: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        try {
            logout();
            setUser(null);
        } catch (error) {
            reportError(error);
            alert('Erro ao fazer logout');
        }
    };

    if (!user && !isEditing) {
        return (
            <div className="max-w-md mx-auto" data-name="login-form">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2">Email:</label>
                        <input
                            type="email"
                            value={loginData.email}
                            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Senha:</label>
                        <input
                            type="password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="w-full mt-4 border border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-50"
                    >
                        Criar Conta
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto" data-name="profile-page">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                    {isEditing ? 'Editar Perfil' : 'Meu Perfil'}
                </h2>
                {user && (
                    <button
                        onClick={handleLogout}
                        className="text-red-500 hover:text-red-700"
                    >
                        Sair
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">Nome Completo:</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {!user && (
                    <div>
                        <label className="block mb-2">Senha:</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                )}

                <div>
                    <label className="block mb-2">CEP:</label>
                    <input
                        type="text"
                        value={formData.cep}
                        onChange={(e) => setFormData({...formData, cep: e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2">Endereço:</label>
                    <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2">Número:</label>
                        <input
                            type="text"
                            value={formData.houseNumber}
                            onChange={(e) => setFormData({...formData, houseNumber: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Complemento:</label>
                        <input
                            type="text"
                            value={formData.complement}
                            onChange={(e) => setFormData({...formData, complement: e.target.value})}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-2">Ponto de Referência:</label>
                    <input
                        type="text"
                        value={formData.reference}
                        onChange={(e) => setFormData({...formData, reference: e.target.value})}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-2">Idade:</label>
                    <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {user?.role === 'admin' && (
                    <div className="border-t pt-4 mt-4">
                        <h3 className="text-lg font-bold mb-4">Dados Bancários</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2">Banco:</label>
                                <input
                                    type="text"
                                    value={formData.bankAccount.bank}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        bankAccount: {
                                            ...formData.bankAccount,
                                            bank: e.target.value
                                        }
                                    })}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Agência:</label>
                                <input
                                    type="text"
                                    value={formData.bankAccount.agency}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        bankAccount: {
                                            ...formData.bankAccount,
                                            agency: e.target.value
                                        }
                                    })}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Conta:</label>
                                <input
                                    type="text"
                                    value={formData.bankAccount.account}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        bankAccount: {
                                            ...formData.bankAccount,
                                            account: e.target.value
                                        }
                                    })}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Tipo de Conta:</label>
                                <select
                                    value={formData.bankAccount.type}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        bankAccount: {
                                            ...formData.bankAccount,
                                            type: e.target.value
                                        }
                                    })}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Selecione</option>
                                    <option value="corrente">Corrente</option>
                                    <option value="poupanca">Poupança</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {loading ? 'Salvando...' : 'Salvar'}
                </button>
            </form>
        </div>
    );
}
