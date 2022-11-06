const express = require('express')
const cors = require('cors')
const app = express()
// const bodyParser = require('body-parser')

let users = ["ismaelseidel"]

app.use(express.static('public'));
// app.use(cors({
//     origin: '*'
// }));

app.use(express.json())
// app.use(bodyParser.json())

app.post('/check-user', (req, res) => {    
    let username = req.body.username    
    if(users.indexOf(username) > -1) {
        res.status(200).json({userExists: true})
    } else {
        const body = req.body;
        const name = body.name;
        const last_name = body.last_name;
        const mail = body.mail;
        const password = body.password;
        const cep = body.cep;
        console.log(name + ' ' + last_name)
        res.send('POST: Nome: ' + name +
                    'Sobrenome: ' + last_name +
                    'Usuario: ' + username +
                    'Email: ' + mail +
                    'Senha: ' + password +
                    'CEP: ' + cep);
        res.status(200).json({userExists: false})
    }
})

app.listen(3125, ()=>console.log("Listening"))