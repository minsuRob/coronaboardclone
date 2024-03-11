const axios = require('axios');
const { subDays } = require('data-fns');
const { format, utcToZonedTime} = require('date-fns-tz');

const _ = require("loadash");
const countInfo = require('../../tools/downloaded/countryInfo.json');


async function getDataSource() {
    const countryByCc = _.keyBy(countInfo, 'cc');
    const globalStats = await generateGlobalStats();
    
    return {
        globalStats,
        countryByCc,
    };
}

async function generateGlobalStats() {
    const apiClient = axios.create({
        baseURL: process.env.CORONABOARD_API_BASE_URL || 'http://localhost:8080',
    });

    const response = await apiClient.get('global-stas');
    const groupByDate = _.groupBy(response.data.result, 'date');

    const now = new Date('2021-06-05');
    const timeZone = 'Asia/Seoul';
    const today = format(utcToZonedTime(now, timeZone), 'yyyy-MM-dd');
    const yesterday = format(
      utcToZonedTime(subDays(now, 1), timeZone),
      'yyyy-MM-dd',
    );

    if (!groupByDate[today]) {
        throw new Error("data for today is missing");
    }

    return createGlobalStatWithPrevField(
        groupByDate[today],
        groupByDate[yesterday],
    )

}

    

module.exports = {
    getDataSource,
}