let campoSenhaLogin = document.getElementById("login-password")
let campoEmailLogin = document.getElementById("login-email")

function login() {
    const data = {
        "mail": campoEmailLogin.value,
        "password": campoSenhaLogin.value
    };
    const json_data = JSON.stringify(data);
    console.log(json_data);

    fetch('http://localhost:3125/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: json_data})
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });

}