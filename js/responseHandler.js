async function errorResponse(error) {
    if (error.response) {
        return {
            code: error.response.status,
            message: error.response.data.message,
        }
    }
    return { code: error, message: "No se pudo establecer la conexión con el servidor" };
}

async function successResponse(response) {
    return { code: response.status, data: response.data };
}
