const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./database');
const gStatController = require('./controller/global-stat.controller');
const keyValueController = require('./controller/key-value.controller');

async function launchServer() {
    const app = express();

    app.use(bodyParser.json());
    
    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });
    app.get('/global-stats', gStatController.getAll);
    app.post('/global-stats', gStatController.insertOrUpdate);
    app.delete('/global-stats', gStatController.remove);

    app.get('/key-value/:key', keyValueController.get);
    app.post('/key-value', keyValueController.insertOrUpdate);
    app.delete('/key-value/:key', keyValueController.remove);

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