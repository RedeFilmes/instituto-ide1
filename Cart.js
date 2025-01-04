function Cart({ cart, setCart }) {
    const [loading, setLoading] = React.useState(false);
    const [address, setAddress] = React.useState(null);
    const [deliveryOption, setDeliveryOption] = React.useState(null);

    React.useEffect(() => {
        loadUserAddress();
    }, []);

    const loadUserAddress = async () => {
        try {
            const user = getCurrentUser();
            if (user?.address) {
                setAddress(user.address);
            }
        } catch (error) {
            reportError(error);
        }
    };

    const handleUpdateQuantity = async (productId, newQuantity) => {
        try {
            setLoading(true);
            const updatedCart = cart.map(item => 
                item.id === productId ? { ...item, quantity: newQuantity } : item
            );
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } catch (error) {
            reportError(error);
            alert('Erro ao atualizar quantidade');
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveItem = async (productId) => {
        try {
            setLoading(true);
            const updatedCart = cart.filter(item => item.id !== productId);
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } catch (error) {
            reportError(error);
            alert('Erro ao remover item');
        } finally {
            setLoading(false);
        }
    };

    const handleCheckout = async () => {
        try {
            if (!isAuthenticated()) {
                alert('Por favor, faça login para continuar');
                window.location.href = '/perfil';
                return;
            }

            if (!address) {
                alert('Por favor, adicione um endereço de entrega');
                return;
            }

            if (!deliveryOption) {
                alert('Por favor, selecione uma opção de entrega');
                return;
            }

            setLoading(true);
            const order = {
                items: cart,
                address,
                deliveryOption,
                total: calculateTotal()
            };

            await createOrder(order);
            setCart([]);
            localStorage.removeItem('cart');
            alert('Pedido realizado com sucesso!');
            window.location.href = '/';
        } catch (error) {
            reportError(error);
            alert('Erro ao finalizar pedido');
        } finally {
            setLoading(false);
        }
    };

    const calculateTotal = () => {
        try {
            const itemsTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const deliveryFee = deliveryOption?.price || 0;
            return itemsTotal + deliveryFee;
        } catch (error) {
            reportError(error);
            return 0;
        }
    };

    if (cart.length === 0) {
        return (
            <div className="text-center py-8" data-name="empty-cart">
                <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h2>
                <a href="/produtos" className="text-blue-500 hover:text-blue-700">
                    Continuar Comprando
                </a>
            </div>
        );
    }

    return (
        <div data-name="cart-page">
            <h1 className="text-2xl font-bold mb-6">Seu Carrinho</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onUpdateQuantity={handleUpdateQuantity}
                            onRemove={handleRemoveItem}
                        />
                    ))}
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow" data-name="order-summary">
                    <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
                    
                    {address && (
                        <DeliveryOptions
                            address={address}
                            onSelectOption={setDeliveryOption}
                        />
                    )}
                    
                    <div className="mt-4 border-t pt-4">
                        <div className="flex justify-between mb-2">
                            <span>Subtotal:</span>
                            <span>R$ {cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
                        </div>
                        {deliveryOption && (
                            <div className="flex justify-between mb-2">
                                <span>Entrega:</span>
                                <span>R$ {deliveryOption.price.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>R$ {calculateTotal().toFixed(2)}</span>
                        </div>
                    </div>
                    
                    <button
                        onClick={handleCheckout}
                        disabled={loading || !deliveryOption}
                        className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
                        data-name="checkout-button"
                    >
                        {loading ? 'Processando...' : 'Finalizar Compra'}
                    </button>
                </div>
            </div>
        </div>
    );
}
