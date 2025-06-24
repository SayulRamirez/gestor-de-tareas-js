document.getElementById("formRegister").addEventListener("submit", async function (event) {
    event.preventDefault();

    const user = {
        first_name: document.getElementById("name").value,
        last_name: document.getElementById("lastname").value,
        maternal_surname: document.getElementById("maternalSurname").value,
        phone_number: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    if (!containText(user)) {
        alert("Debes de llenar todos los campos requeridos");
        return;
    }

    let errores = validSize(
        { nombre: "nombre", valor: user.first_name },
        { apellido: "apellido", valor: user.last_name },
        { matero: "materno", valor: user.maternal_surname },
        { telefono: "telefono", valor: user.phone_number }
    );
    
    if (errores.length > 0) {
        alert(errores.join("\n"));
        return;
    }

    if (!emailValid(user.email)) {
        alert("Ingresa un email valido por favor.");
        return;
    }

    const response = await registerUser(user);

    if (response.code === null) {
        alert("Ocurrió un error inesperado, por favor intentalo más tarde.");
        return;
    }

    if(response.code === 409) {
        alert(response.message);
        return;
    }

    if (response.code === 200) {
        alert("Registro exitoso. \nPresióna aceptar para dirigirte al login.");
        window.location.href = "../index.html";
    }
});