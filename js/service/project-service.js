const baseProjects = 'http://127.0.0.1:8080/api/v1/projects';

async function getAllProjectsByUser() {
    const token = getToken();
    const id = getIdUser();

    try {
        const response = await axios.get(`${baseProjects}/all/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        return await successResponse(response);
    } catch (error) {
        return await errorResponse(error);
    }
}

async function save(project) {
    const token = getToken();
    project.leader = getIdUser();

    try {
        const response = await axios.post(baseProjects, project, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        });
        return await successResponse(response);
    } catch (error) {
        return await errorResponse(error);
    }
}

async function getProject(id) {
    const token = getToken();

    try {
        const response = await axios.get(`${baseProjects}/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        return await successResponse(response);
    } catch (error) {
        return await errorResponse(error);
    }
}

async function updateProject(id, status) {
    const token = getToken();

    try {
        const response = await axios.put(baseProjects, {id, status}, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        return await successResponse(response);
    } catch(error) {
        return await errorResponse(error);
    }
}

async function deleteProject(id) {
    const token = getToken();

    try {
        const response = await axios.delete(`${baseProjects}/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        return await successResponse(response);
    } catch(error) {
        return await errorResponse(error);
    }
}

async function getReport(id) {
    const token = getToken();

    try {
        const response = await axios.get(`${baseProjects}/report/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        return await successResponse(response);
    } catch (error) {
        return await errorResponse(error);
    }
}