function ProductCard({ product, onAddToCart }) {
    const [loading, setLoading] = React.useState(false);

    const handleAddToCart = async () => {
        try {
            setLoading(true);
            await onAddToCart(product);
        } catch (error) {
            reportError(error);
            alert('Erro ao adicionar ao carrinho');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="product-card bg-white" data-name="product-card">
            <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-48 object-cover"
                data-name="product-image"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2" data-name="product-name">
                    {product.name}
                </h3>
                <p className="text-gray-600 mb-2" data-name="product-description">
                    {product.description}
                </p>
                <div className="text-sm text-gray-500 mb-2">
                    Estoque: {product.stock} unidades
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold" data-name="product-price">
                        R$ {product.price.toFixed(2)}
                    </span>
                    <button
                        onClick={handleAddToCart}
                        disabled={loading || product.stock === 0}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                        data-name="add-to-cart-button"
                    >
                        {loading ? 'Adicionando...' : product.stock === 0 ? 'Sem estoque' : 'Adicionar'}
                    </button>
                </div>
                {product.discount && (
                    <div className="mt-2 text-green-600 font-semibold">
                        {(product.discount * 100).toFixed(0)}% de desconto
                    </div>
                )}
            </div>
        </div>
    );
}
