function CartItem({ item, onUpdateQuantity, onRemove }) {
    const [loading, setLoading] = React.useState(false);

    const handleQuantityChange = async (newQuantity) => {
        try {
            setLoading(true);
            if (newQuantity >= 1) {
                await onUpdateQuantity(item.id, newQuantity);
            }
        } catch (error) {
            reportError(error);
            alert('Erro ao atualizar quantidade');
        } finally {
            setLoading(false);
        }
    };

    const handleRemove = async () => {
        try {
            setLoading(true);
            await onRemove(item.id);
        } catch (error) {
            reportError(error);
            alert('Erro ao remover item');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="cart-item" data-name="cart-item">
            <img 
                src={item.imageUrl} 
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
                data-name="item-image"
            />
            <div className="flex-grow ml-4">
                <h3 className="font-semibold" data-name="item-name">{item.name}</h3>
                <p className="text-gray-600" data-name="item-price">
                    R$ {item.price.toFixed(2)}
                </p>
            </div>
            <div className="flex items-center space-x-2" data-name="quantity-controls">
                <button
                    onClick={() => handleQuantityChange(item.quantity - 1)}
                    disabled={loading || item.quantity <= 1}
                    className="px-2 py-1 border rounded"
                    data-name="decrease-quantity"
                >
                    -
                </button>
                <span data-name="item-quantity">{item.quantity}</span>
                <button
                    onClick={() => handleQuantityChange(item.quantity + 1)}
                    disabled={loading}
                    className="px-2 py-1 border rounded"
                    data-name="increase-quantity"
                >
                    +
                </button>
            </div>
            <button
                onClick={handleRemove}
                disabled={loading}
                className="ml-4 text-red-500 hover:text-red-700"
                data-name="remove-item"
            >
                Remover
            </button>
        </div>
    );
}
