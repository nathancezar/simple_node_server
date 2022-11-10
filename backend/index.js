const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3125;

const {MongoClient} = require('mongodb');

const DB_NAME = 'users_databese';
const MONGO_URL = `mongodb://ine5646.nathan.cezar.vms.ufsc.br/27017/${DB_NAME}`;

var client = new MongoClient(MONGO_URL, {useUnifiedTopology: true});

client.connect()
    .then(onConnected)
    .catch(erro => exitError(erro));

function onConnected(client) {
    db = client.db('DB_TEST');

    const collection = db.collection('words');
    insertWord("teste", "testando", collection);
}

async function insertWord(word, definition, collection){
    const doc = {
        word: word,
        definition: definition
    };

    res = await collection.insertOne(doc);
    console.log(`Adicionado: ${res.insertedId}`);
}

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
        res.status(200).json({loginSucess: true})
    } else {
        res.status(200).json({loginSucess: false})
    }
})

app.listen(port, ()=>console.log("Listening to " + port))