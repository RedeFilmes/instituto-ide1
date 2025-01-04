function DeliveryOptions({ address, onSelectOption }) {
    const [loading, setLoading] = React.useState(true);
    const [options, setOptions] = React.useState([]);
    const [selectedOption, setSelectedOption] = React.useState(null);

    React.useEffect(() => {
        loadDeliveryOptions();
    }, [address]);

    const loadDeliveryOptions = async () => {
        try {
            setLoading(true);
            const storeLocation = { lat: -23.5505, lng: -46.6333 }; // Example store location
            const distance = await calculateDeliveryDistance(
                storeLocation,
                { lat: address.latitude, lng: address.longitude }
            );

            const deliveryOptions = [
                {
                    id: 'express',
                    name: 'Entrega Expressa',
                    price: calculateExpressDeliveryPrice(distance.distance.value),
                    time: '30-45 min'
                },
                {
                    id: 'standard',
                    name: 'Entrega Padrão',
                    price: calculateStandardDeliveryPrice(distance.distance.value),
                    time: '1-2 horas'
                },
                {
                    id: 'pickup',
                    name: 'Retirar na Loja',
                    price: 0,
                    time: 'Em 15 min'
                }
            ];

            setOptions(deliveryOptions);
        } catch (error) {
            reportError(error);
            alert('Erro ao carregar opções de entrega');
        } finally {
            setLoading(false);
        }
    };

    const handleSelectOption = (option) => {
        try {
            setSelectedOption(option);
            onSelectOption(option);
        } catch (error) {
            reportError(error);
        }
    };

    if (loading) {
        return <div className="text-center py-4">Carregando opções de entrega...</div>;
    }

    return (
        <div className="space-y-4" data-name="delivery-options">
            {options.map(option => (
                <div
                    key={option.id}
                    className={`delivery-option ${selectedOption?.id === option.id ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(option)}
                    data-name={`option-${option.id}`}
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">{option.name}</h3>
                            <p className="text-gray-600">Tempo estimado: {option.time}</p>
                        </div>
                        <div className="text-lg font-bold">
                            {option.price > 0 ? `R$ ${option.price.toFixed(2)}` : 'Grátis'}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function calculateExpressDeliveryPrice(distanceInMeters) {
    try {
        const basePrice = 10;
        const pricePerKm = 2;
        const distanceInKm = distanceInMeters / 1000;
        return basePrice + (distanceInKm * pricePerKm);
    } catch (error) {
        reportError(error);
        return 0;
    }
}

function calculateStandardDeliveryPrice(distanceInMeters) {
    try {
        const basePrice = 5;
        const pricePerKm = 1;
        const distanceInKm = distanceInMeters / 1000;
        return basePrice + (distanceInKm * pricePerKm);
    } catch (error) {
        reportError(error);
        return 0;
    }
}
