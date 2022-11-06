const express = require('express')
const cors = require('cors')
// const app = express()

let users = ["ismaelseidel"]

// app.use(express.static('public'));
app.use(cors({
    origin: '*'
}));

// app.use(express.json())
app.use(bodyParser.json())

app.post('/check-user', (req, res) => {    
    let username = req.body.username    
    if(users.indexOf(username) > -1) {
        res.status(200).json({userExists: true})
    } else {
        const name = req.body.name;
        const last_name = req.body.last_name;
        const mail = req.body.mail;
        const pasword = req.body.pasword;
        const cep = req.body.cep;
        console.log(name + ' ' + last_name)
        res.status(200).json({userExists: false})
    }

})

app.listen(3125, ()=>console.log("Listening"))