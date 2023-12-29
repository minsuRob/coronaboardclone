const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./database');
const { getAll, insertOrUpdate, remove } = require('./controller/global-stat.controller');

async function launchServer() {
    const app = express();

    app.use(bodyParser.json());

    app.get('/global-stats', getAll);
    app.post('/global-stats', insertOrUpdate);
    app.delete('/global-stats', remove);

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