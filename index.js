const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./database');

async function launchServer() {
    const app = express();

    app.use(bodyParser.json());

    app.get('', (req, res)=> {
        res.json(({message : "hello cororong"}));
    });

    try {
        await sequelize.sync();
    } catch (error) {
        console.log(error);
        process.exit(1);        
    }

    const port = process.env.PORT || 8080;

    app.listen(port, () => {
        console.log(`server port is ${port}`);
    });
}

launchServer();