const Sequelize = require('sequelize');
const config = {
    host: process.env.HOST || '127.0.0.1',
    port: 3306,
    database: 'coronaboard',
}

const sequelize = new Sequelize(config.database);

module.exports = {
    sequelize,
    GlobalStat : require('./global-stat.model')(sequelize),
}