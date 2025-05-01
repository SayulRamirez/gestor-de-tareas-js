document.getElementById('formLogin').addEventListener('submit', async function (event) {
    event.preventDefault();

    const credentials = {
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value.trim(),
    }

    if(!containText(credentials)) {
        alert('Debes de llenar todos los campos.');
        return;
    }

    if(!emailValid(credentials.email)) {
        alert('El formato del email no es valido, verificalo.');
        return;
    }

    const response = await login(credentials);

    if(response.code === null) {
        alert(response.message);
        return;
    }
    
    if(response.code === 403) {
        alert('Error en email o contraseña.');
        return;
    }

    if(response.code === 200) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/view/dashboard.html";
    }
})