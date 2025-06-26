async function registerUser(user) {
    try {
        const response = await axios.post("http://localhost:8080/auth/register", user);
        return await successResponse(response);
    } catch (error) {
        return await errorResponse(error);
    }
}

async function login(credentials) {
    try {
        const response = await axios.post("http://localhost:8080/auth/login", credentials);
        return await successResponse(response);
    } catch (error) {
        return await errorResponse(error);
    }
}