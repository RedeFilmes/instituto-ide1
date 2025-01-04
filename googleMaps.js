function initializeMap(elementId, center = { lat: -23.5505, lng: -46.6333 }) {
    try {
        return new google.maps.Map(document.getElementById(elementId), {
            zoom: 12,
            center: center
        });
    } catch (error) {
        reportError(error);
        return null;
    }
}

function calculateDeliveryDistance(origin, destination) {
    try {
        const service = new google.maps.DistanceMatrixService();
        
        return new Promise((resolve, reject) => {
            service.getDistanceMatrix({
                origins: [origin],
                destinations: [destination],
                travelMode: google.maps.TravelMode.DRIVING
            }, (response, status) => {
                if (status === 'OK') {
                    resolve(response.rows[0].elements[0]);
                } else {
                    reject(new Error('Falha ao calcular distância'));
                }
            });
        });
    } catch (error) {
        reportError(error);
        throw error;
    }
}

function initializeAutocomplete(inputId) {
    try {
        const input = document.getElementById(inputId);
        const autocomplete = new google.maps.places.Autocomplete(input, {
            types: ['address'],
            componentRestrictions: { country: 'BR' }
        });
        
        return autocomplete;
    } catch (error) {
        reportError(error);
        return null;
    }
}
