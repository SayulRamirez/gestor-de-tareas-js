async function registerUser(user) {
    try {
        const response = await axios.post("http://localhost:8080/auth/register", user);
        return { code: response.status, data: response.data }; // ✅ Si el registro es exitoso
    } catch (error) {
        if (error.response) {
            return {
                message: error.response.data.message,
                code: error.response.status
            };
        }
        return { message: "Error de conexión", code: null };
    }
}
