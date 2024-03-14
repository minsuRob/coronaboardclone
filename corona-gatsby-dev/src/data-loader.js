const axios = require('axios');
const { subDays } = require('date-fns');
const { format, utcToZonedTime} = require('date-fns-tz');

const _ = require("lodash");
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

    const response = await apiClient.get('global-stats');
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

function createGlobalStatWithPrevField(todayStats, yesterdayStats) {
    const yesterdayStatsByCc = _.keyBy(yesterdayStats, 'cc');
  
    const globalStatWithPrev = todayStats.map((todayStat) => {
      const cc = todayStat.cc;
      const yesterdayStat = yesterdayStatsByCc[cc];
      if (yesterdayStat) {
        return {
          ...todayStat,
          confirmedPrev: yesterdayStat.confirmed || 0,
          deathPrev: yesterdayStat.death || 0,
          negativePrev: yesterdayStat.negative || 0,
          releasedPrev: yesterdayStat.released || 0,
          testedPrev: yesterdayStat.tested || 0,
        };
      }
  
      return todayStat;
    });
  
    return globalStatWithPrev;
  }

    

module.exports = {
    getDataSource,
}