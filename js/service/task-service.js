const baseTask = 'http://127.0.0.1:8080/api/v1/tasks';

async function getAllByUser() {
    const token = getToken();
    const id = getIdUser();

    try {
        const response = await axios.get(`${baseTask}/all/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        return await successResponse(response);
    } catch (error) {
        return await errorResponse(error);
    }
}

async function updateTask(id, status) {
    const token = getToken();

    try {
        const response = await axios.put(baseTask, {id, status}, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        return await successResponse(response);
    } catch(error) {
        return await errorResponse(error);
    }
}

async function saveTask(task) {
    const token = getToken();
    
    try {
        const response = await axios.post(baseTask, task, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        return await successResponse(response);
    } catch(error) {
        return await errorResponse(error);
    }
}