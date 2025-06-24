const textarea = document.getElementById("description");
const counter = document.getElementById("current-count");
const maxLimit = document.getElementById("max-limit");

textarea.addEventListener("input", () => {
    counter.textContent = textarea.value.length;

    // Opcional: cambiar el color cuando se acerca al límite
    if (textarea.value.length >= 200) {
    counter.style.color = "red";
    } else {
    counter.style.color = "black";
    }
});

document.getElementById('createProject').addEventListener('click', async (event) => {
    event.preventDefault();

    const project = {
        title: document.getElementById('title').value.trim(),
        description: textarea.value.trim(),
        estimate_completion: document.getElementById('date').value.trim(),
    };

    if (!containText(project)) {
        alert("Debes de llenar todos los campos requeridos");
        return;
    }

    let errores = validSize(
        { nombre: "titulo", valor: project.title },
        { nombre: "descripcion", valor: project.description },
    );
    
    if (errores.length > 0) {
        alert(errores.join("\n"));
        return;
    }

    const response = await save(project);

    if (response.code === null) {
        alert("Ocurrió un error inesperado, por favor intentalo más tarde.");
        return;
    }

    if(response.code === 404 || response.code === 409 || response.code === 400) {
        alert(response.message);
        return;
    }

    if (response.code === 201) {
        alert("Se creo exitosamente el proyecto");
        window.location.href = "../view/dashboard.html";
    }
});