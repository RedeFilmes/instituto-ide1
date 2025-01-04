async function login(email, password) {
    try {
        const user = await getUserByEmail(email);
        
        if (!user || user.objectData.password !== password) {
            throw new Error('Credenciais inválidas');
        }

        const { password: _, ...userWithoutPassword } = user.objectData;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        localStorage.setItem('userId', user.objectId);

        return userWithoutPassword;
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function register(userData) {
    try {
        const existingUser = await getUserByEmail(userData.email);
        if (existingUser) {
            throw new Error('Email já cadastrado');
        }

        const newUser = await saveUser({
            ...userData,
            role: 'user',
            createdAt: new Date().toISOString()
        });

        const { password: _, ...userWithoutPassword } = newUser.objectData;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        localStorage.setItem('userId', newUser.objectId);

        return userWithoutPassword;
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function updateUser(userId, userData) {
    try {
        const updatedUser = await saveUser({
            ...userData,
            objectId: userId,
            updatedAt: new Date().toISOString()
        });

        const { password: _, ...userWithoutPassword } = updatedUser.objectData;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));

        return userWithoutPassword;
    } catch (error) {
        reportError(error);
        throw error;
    }
}

function logout() {
    try {
        localStorage.removeItem('user');
        localStorage.removeItem('userId');
        window.location.hash = '/';
    } catch (error) {
        reportError(error);
        throw error;
    }
}

function isAuthenticated() {
    try {
        return localStorage.getItem('userId') !== null;
    } catch (error) {
        reportError(error);
        return false;
    }
}

function getCurrentUser() {
    try {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        reportError(error);
        return null;
    }
}
