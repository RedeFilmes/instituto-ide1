const OBJECT_TYPES = {
    PRODUCTS: 'products',
    USERS: 'users',
    CARTS: 'carts',
    ORDERS: 'orders'
};

async function saveProduct(product) {
    try {
        if (product.objectId) {
            return await trickleUpdateObject(OBJECT_TYPES.PRODUCTS, product.objectId, product);
        } else {
            return await trickleCreateObject(OBJECT_TYPES.PRODUCTS, product);
        }
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function getProducts() {
    try {
        const response = await trickleListObjects(OBJECT_TYPES.PRODUCTS, 100, true);
        return response.items;
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function getProduct(productId) {
    try {
        return await trickleGetObject(OBJECT_TYPES.PRODUCTS, productId);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function deleteProduct(productId) {
    try {
        await trickleDeleteObject(OBJECT_TYPES.PRODUCTS, productId);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function saveUser(user) {
    try {
        if (user.objectId) {
            return await trickleUpdateObject(OBJECT_TYPES.USERS, user.objectId, user);
        } else {
            return await trickleCreateObject(OBJECT_TYPES.USERS, user);
        }
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function getUser(userId) {
    try {
        return await trickleGetObject(OBJECT_TYPES.USERS, userId);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function getUserByEmail(email) {
    try {
        const response = await trickleListObjects(OBJECT_TYPES.USERS, 100, true);
        return response.items.find(user => user.objectData.email === email);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function saveCart(userId, cartItems) {
    try {
        const cartObjectType = `${OBJECT_TYPES.CARTS}:${userId}`;
        const existingCarts = await trickleListObjects(cartObjectType, 1, true);
        
        if (existingCarts.items.length > 0) {
            const cartId = existingCarts.items[0].objectId;
            return await trickleUpdateObject(cartObjectType, cartId, { items: cartItems });
        } else {
            return await trickleCreateObject(cartObjectType, { items: cartItems });
        }
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function getCart(userId) {
    try {
        const cartObjectType = `${OBJECT_TYPES.CARTS}:${userId}`;
        const response = await trickleListObjects(cartObjectType, 1, true);
        return response.items[0]?.objectData.items || [];
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function saveOrder(userId, order) {
    try {
        const orderObjectType = `${OBJECT_TYPES.ORDERS}:${userId}`;
        return await trickleCreateObject(orderObjectType, order);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function getOrders(userId) {
    try {
        const orderObjectType = `${OBJECT_TYPES.ORDERS}:${userId}`;
        const response = await trickleListObjects(orderObjectType, 100, true);
        return response.items;
    } catch (error) {
        reportError(error);
        throw error;
    }
}
