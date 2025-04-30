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