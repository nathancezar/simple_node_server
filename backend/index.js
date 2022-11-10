const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3125;

let users = ["ismaelseidel"]
let users_info = {}

app.use(cors({
        origin: '*'
    }));
    
app.use(express.json())

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/check-user', (req, res) => {    
    let username = req.body.username    
    if(users.indexOf(username) > -1) {
        res.status(200).json({userExists: true})
    } else {
        res.status(200).json({userExists: false})
    }
})

app.post('/new-account', (req, res) => {
    const body = req.body;
    const mail = body.mail;
    const username = body.username;
    const user_info = {
        "username" : username,
        "name" : body.name,
        "last_name" : body.last_name,
        "password" : body.password,
        "cep" : body.cep
    }

    users.push(username);
    console.log(users)

    users_info[mail] = user_info;
    console.log(users_info[mail])

    res.status(200).json({ContaSalva: true})
})

app.post('/login', (req, res) =>{
    const body = req.body;
    const mail = body.mail;
    const password = body.password;
    
    if (mail in users_info && users_info[mail][password] == password) {
        console.log("Vai para Hello World");
        // return res.render('./frontend/login.html');
    } else {
        res.status(200).json({loginSucess: false})
    }
})

app.listen(port, ()=>console.log("Listening to " + port))