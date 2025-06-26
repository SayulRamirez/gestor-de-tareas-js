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
        console.log(valor)
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

const es = {
    pendiente: "Pendiente",
    en_progreso: "En progreso",
    completo: "Completo",
}

const en = {
    pending: "PENDING",
    in_progress: "IN_PROGRESS",
    complete: "COMPLETE",
}

function statusToSpanish(status) {
    switch(status) {
        case en.pending: {
            return es.pendiente;
        }
        case en.in_progress: {
            return es.en_progreso;
        }
        case en.complete: {
            return es.completo;
        }
    }
}

function statusToEnglish(status) {
    switch(status) {
        case es.pendiente: {
            return en.pending;
        }
        case es.en_progreso: {
            return en.in_progress;
        }
        case es.completo: {
            return en.complete;
        }
    }
}

// Script para el menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}