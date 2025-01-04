const API_BASE_URL = '/api';

async function fetchWithAuth(endpoint, options = {}) {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        // For demonstration, return mock data instead of making real API calls
        return await getMockData(endpoint);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

function getMockData(endpoint) {
    return new Promise((resolve) => {
        setTimeout(() => {
            switch(endpoint) {
                case '/products?category=featured':
                    resolve({ items: mockProducts });
                    break;
                case '/products?category=daily-offers':
                    resolve({ items: mockDailyOffers });
                    break;
                case '/products':
                    resolve({ items: [...mockProducts, ...mockDailyOffers] });
                    break;
                case '/stores':
                    resolve({ items: mockStores });
                    break;
                default:
                    resolve({ items: [] });
            }
        }, 500); // Simulate network delay
    });
}

async function getProducts(category = null, page = 1) {
    try {
        const params = new URLSearchParams({ page });
        if (category) params.append('category', category);
        return await fetchWithAuth(`/products?${params.toString()}`);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function createProduct(productData) {
    try {
        return await fetchWithAuth('/products', {
            method: 'POST',
            body: JSON.stringify(productData),
        });
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function updateProduct(productId, productData) {
    try {
        return await fetchWithAuth(`/products/${productId}`, {
            method: 'PUT',
            body: JSON.stringify(productData),
        });
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function createOrder(orderData) {
    try {
        return await fetchWithAuth('/orders', {
            method: 'POST',
            body: JSON.stringify(orderData),
        });
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function getOrders() {
    try {
        return await fetchWithAuth('/orders');
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function updateDeliveryRegion(regionData) {
    try {
        return await fetchWithAuth('/delivery-regions', {
            method: 'POST',
            body: JSON.stringify(regionData),
        });
    } catch (error) {
        reportError(error);
        throw error;
    }
}
