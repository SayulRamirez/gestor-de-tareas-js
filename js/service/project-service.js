const base = 'http://127.0.0.1:8080/api/v1/projects';

async function getAllProjectsByUser() {

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

async function save(project) {
    const token = getToken();

    project.leader = getIdUser();

    try {
        const response = await axios.post(base, project, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        });
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
