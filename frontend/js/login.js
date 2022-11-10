let campoSenhaLogin = document.getElementById("login-password")
let campoEmailLogin = document.getElementById("login-email")

async function login() {
    const data = {
        "mail": campoEmailLogin.value,
        "password": campoSenhaLogin.value
    };
    const json_data = JSON.stringify(data);
    console.log(json_data);

    const response = await fetch('http://ine5646.nathan.cezar.vms.ufsc.br:3125/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: json_data})

    const resultado = await response.json();
    console.log(resultado);
    if (resultado.loginSucess) {
        mostrarTelaInicial()
    }
        

}