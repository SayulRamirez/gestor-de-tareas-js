const usuario = {
    first_name: "mario",
    last_name: "alfonso",
    maternal_surname: "ortega",
    phone_number: "4332451243",
    email: "malfonso@example.com",
    password: "1234",
}
axios.post("http://localhost:8080/auth/register", {
        first_name: "mario",
        last_name: "alfonso",
        maternal_surname: "ortega",
        phone_number: "4332451243",
        email: "malfonso@example.com",
        password: "1234",
})
    .then(function (response) {
        console.log(response.data);
    })
    .then((error) => console.log(error))