const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('', (req, res)=> {
    res.json(({message : "hello cororong"}));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`server port is ${port}`);
});