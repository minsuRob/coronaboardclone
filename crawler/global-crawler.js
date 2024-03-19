const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');

const countryInfo = require('../tools/downloaded/countryInfo.json');


class GlobalCrawler{
    constructor() {
        this.client = axios.create({
            Headers: {
                'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
      },
        });

        this.countryMapping = _.chain(countryInfo).keyBy('worldometer_title').mapValues('cc').value();
    }

    async crawlStat() {
        // 실제 웹사이트: https://www.worldometers.info/coronavirus/
        // 클론 사이트 주소
        const url = 'https://yjiq150.github.io/coronaboard-crawling-sample/clone/worldometer/';
        const resp = await this.client.get(url);
        const $ = cheerio.load(resp.data);

        // return this.
    }

    _extractStatByCountry($) {

    }

    // text to integer
    _normalize(numberText) {
        // console.log(`${numberText} numberText`)
        // const matches = /[0-9,]+/.exec(numberText);
        // const absValue = matches[0];
        
        return parseInt(numberText.replace(/[\s,]*/g, '')) || 0;
    }


}
