async function registerUser(user) {
    try {
        const response = await axios.post("http://localhost:8080/auth/register", user);
        return { code: response.status, data: response.data };
    } catch (error) {
        if (error.response) {
            return {
                message: error.response.data.message,
                code: error.response.status
            };
        }
    }
    return { message: "Error de conexión", code: null };
}

async function login(credentials) {
    try {
        const response = await axios.post("http://localhost:8080/auth/login", credentials);
        return { code: response.status, data: response.data };
    } catch (error) {
        if (error) {
            return { message: error.response.data.message, 
                code: error.response.status,
            };
        }

    }
    return { message: "Error de conexión", code: null};
}