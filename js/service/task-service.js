const base = 'http://127.0.0.1:8080/api/v1/tasks';

async function getAllByUser() {

    const token = getToken();

    const id = getIdUser();

    try {

        const response = await axios.get(`${base}/all/${id}`, {
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

async function updateTask(id, status) {
    const token = getToken();

    try {
        const response = await axios.put(base, {id, status}, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        return { code: response.status, data: response.data };
    } catch(error) {
        if (error.response) {
            return {
                message: error.response.data.message,
                code: error.response.status,
            }
        }
        return { message: "No se pudo establecer la conexión con el servidor", code: error };
    }
}