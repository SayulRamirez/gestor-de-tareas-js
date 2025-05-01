async function getAllProjectsByUser() {

    const token = getToken();

    const id = getIdUser();

    try {

        const response = await axios.get(`http://localhost:8080/api/v1/projects/all/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        return { code: response.status, data: response.data };
    } catch (error) {
        if (error.response) {
            return {
                message: error.response.data.message,
                code: error.response.status
            }
        }
        return { message: "No se pudo establecer la conexión con el servidor", code: error };
    }
}
