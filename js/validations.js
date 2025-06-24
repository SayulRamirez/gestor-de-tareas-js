const limit = {
    nombre: { max: 50, min: 1 },
    apellido: { max: 30, min: 1 },
    matero: { max: 30, min: 0 },
    telefono: { max: 15, min: 10 },
    titulo: { max:150, min: 1 },
    descripcion: { max: 255, min: 1},
};

function validSize(...campos) {
    let errores = [];

    campos.forEach(({ nombre, valor }) => {
        const limite = limit[nombre]; 
        if (!limite) return;

        if (valor.trim().length < limite.min || valor.trim().length > limite.max) {
            errores.push(`El campo ${nombre} debe tener entre ${limite.min} y ${limite.max} caracteres.`);
        }
    });

    return errores;
}

function containText(element) {
    if (element) {
        let values = Object.values(element);
        
        for (let i = 0; i < values.length; i++) {
            if (values[i] === '') {
                return false;
            }
        }
        return true;
    }
}

function emailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}