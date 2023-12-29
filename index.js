const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./database');
const gStatController = require('./controller/global-stat.controller');

async function launchServer() {
    const app = express();

    app.use(bodyParser.json());

    app.get('/global-stats', gStatController.getAll);
    app.post('/global-stats', gStatController.insertOrUpdate);
    app.delete('/global-stats', gStatController.remove);

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