const express = require('express');

const bodyParser = require('body-parser')
const {randomBytes} = require('crypto');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
const posts = {};

app.use(cors());

app.get('/posts', (req, res) => {
    // const roomTest = randomBytes(4).toString('hex')
    // res.send(roomTest).json;
    res.send(posts);
});

app.post('/posts', (req, res)=>{
    const id = randomBytes(4).toString('hex')
    const { title } = req.body;  
    // OR
    // const body = req.body;
    // title = body.title = req.body.title;
    posts[id] = {
        id, title
    };

    /*
    posts = [{id: randomByte, title: "title"},{id: randomByte, title: "title"},{id: randomByte, title: "title"},{id: randomByte, title: "title"},]
    */

    res.status(201).send(posts[id]);
    // res.send(id)    

});


app.listen(4000, ()=> {
    console.log('Listening on 4000')
});

