function Products({ onAddToCart }) {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState('all');
    const [showAddForm, setShowAddForm] = React.useState(false);
    const [newProduct, setNewProduct] = React.useState({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: '',
        stock: ''
    });

    React.useEffect(() => {
        loadProducts();
        checkAdminStatus();
    }, []);

    const checkAdminStatus = () => {
        try {
            const user = getCurrentUser();
            setIsAdmin(user?.role === 'admin');
        } catch (error) {
            reportError(error);
        }
    };

    const loadProducts = async () => {
        try {
            setLoading(true);
            const response = await getProducts();
            setProducts(response.items);
        } catch (error) {
            reportError(error);
            alert('Erro ao carregar produtos');
        } finally {
            setLoading(false);
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const newId = Math.max(...products.map(p => p.id)) + 1;
            const productToAdd = {
                ...newProduct,
                id: newId,
                price: parseFloat(newProduct.price),
                stock: parseInt(newProduct.stock)
            };
            
            mockProducts.push(productToAdd);
            setProducts([...products, productToAdd]);
            setShowAddForm(false);
            setNewProduct({
                name: '',
                description: '',
                price: '',
                category: '',
                imageUrl: '',
                stock: ''
            });
            alert('Produto adicionado com sucesso!');
        } catch (error) {
            reportError(error);
            alert('Erro ao adicionar produto');
        } finally {
            setLoading(false);
        }
    };

    const handleAddToCart = async (product) => {
        try {
            const success = await onAddToCart(product);
            if (success) {
                alert('Produto adicionado ao carrinho!');
            }
        } catch (error) {
            reportError(error);
            alert('Erro ao adicionar ao carrinho');
        }
    };

    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    if (loading) {
        return <div className="text-center py-8">Carregando produtos...</div>;
    }

    return (
        <div data-name="products-page">
            {isAdmin && (
                <div className="mb-6" data-name="admin-controls">
                    <button 
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={() => setShowAddForm(!showAddForm)}
                    >
                        {showAddForm ? 'Cancelar' : 'Adicionar Novo Produto'}
                    </button>

                    {showAddForm && (
                        <form onSubmit={handleAddProduct} className="mt-4 bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4">Adicionar Novo Produto</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-2">Nome:</label>
                                    <input
                                        type="text"
                                        value={newProduct.name}
                                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2">Categoria:</label>
                                    <select
                                        value={newProduct.category}
                                        onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                                        className="w-full p-2 border rounded"
                                        required
                                    >
                                        <option value="">Selecione uma categoria</option>
                                        {PRODUCT_CATEGORIES.map(category => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2">Preço:</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={newProduct.price}
                                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2">Estoque:</label>
                                    <input
                                        type="number"
                                        value={newProduct.stock}
                                        onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block mb-2">Descrição:</label>
                                    <textarea
                                        value={newProduct.description}
                                        onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                                        className="w-full p-2 border rounded"
                                        rows="3"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block mb-2">URL da Imagem:</label>
                                    <input
                                        type="url"
                                        value={newProduct.imageUrl}
                                        onChange={(e) => setNewProduct({...newProduct, imageUrl: e.target.value})}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                disabled={loading}
                            >
                                {loading ? 'Salvando...' : 'Salvar Produto'}
                            </button>
                        </form>
                    )}
                </div>
            )}
            
            <div className="mb-6">
                <label className="block mb-2">Filtrar por categoria:</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="all">Todas as categorias</option>
                    {PRODUCT_CATEGORIES.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-8">
                {PRODUCT_CATEGORIES.map(category => {
                    const categoryProducts = filteredProducts.filter(
                        product => selectedCategory === 'all' ? product.category === category.id : product.category === selectedCategory
                    );

                    if (categoryProducts.length === 0) {
                        return null;
                    }

                    return (
                        <div key={category.id}>
                            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
                            <div className="product-grid">
                                {categoryProducts.map(product => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product}
                                        onAddToCart={() => handleAddToCart(product)}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
