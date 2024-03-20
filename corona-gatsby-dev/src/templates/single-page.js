import React from 'react';
import { Slide } from '../components/slide';
import { getDataSource } from '../data-loader';
import {Dashboard} from '../components/dashboard';
import { Notice } from '../components/notice';

const axios = require('axios');
const _ = require("lodash");

const { subDays } = require('date-fns');
const { format, utcToZonedTime} = require('date-fns-tz');


async function generateGlobalStats() {
    const apiClient = axios.create({
      baseURL: process.env.CORONABOARD_API_BASE_URL || 'http://localhost:8080',
    });

    const response = await apiClient.get('global-stats');
    const groupByDate = _.groupBy(response.data.result, 'date'); 
    
    const now = new Date('2020-01-22');
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

  async function generateGlobalStats2() {
    // const dataSource = await getDataSource();
    // console.log(dataSource);
  }

export default function SinglePage({ pageContext }) {
    const {dataSource} = pageContext;
    // generateGlobalStats2();
    // console.log(generateGlobalStats());
    //   const groupByDate = _.groupBy(response.data.result, 'date'); 
    

    // const {thirdSlideTitle} = dataSource;
    const {countryByCc, globalStats, notice} = dataSource;

    return (
        <div>
            <h1>야로나!!보드</h1>
            <p>made by createPage</p>
            <Slide title="국가 별 상황"> 국가별 현황</Slide>
            <Slide title={"국가 별 상황"}> 국가별 현황1 오호1</Slide>
            <Dashboard globalStats={globalStats}/>
            <Notice notice={notice}/>
    {/* <Slide title={thirdSlideTitle}> 국가별 현황</Slide> */}
        </div>
    )
}