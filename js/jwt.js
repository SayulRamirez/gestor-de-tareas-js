function getToken() {
    return localStorage.getItem('token');
}

function getIdUser() {
    const payload = getPayload();

    if (payload && payload.jti) {
        return parseInt(payload.jti);
    }

    return null;
}

function getPayload() {
    const token = getToken();

    if (token) {
        try {
            const payloadDecoded = atob(token.split('.')[1]);
            return JSON.parse(payloadDecoded);
        } catch (error) {
            console.error("Error al decodificar el token:", error);
            return null;
        }
    }

    return null;
}

function isTokenValid() {
    const payload = getPayload();

    if (payload && payload.exp) {
        const now = Math.floor(Date.now() / 1000);
        return payload.exp > now;
    }

    return false;
}
