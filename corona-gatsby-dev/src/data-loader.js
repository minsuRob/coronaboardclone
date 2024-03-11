const _ = require("loadash");
const countInfo = require('../../tools/downloaded/countryInfo.json');


async function getDataSource() {
    const countryByCc = _.keyBy(countInfo, 'cc');
    
    return {
        countryByCc,
    };
}

module.exports = {
    getDataSource,
}