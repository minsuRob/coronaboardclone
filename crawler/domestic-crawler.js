const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');

class DomesticCrawler{
    constructor() {
        this.client = axios.create({
            Headers: {
                'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
      },
        });
    }

    async crawlStat() {
        // 공식 사이트 '발생동향 > 국내 발생 현황' 페이지의 주소
        // http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=
        // 클론 사이트 주소
        const url = 'https://yjiq150.github.io/coronaboard-crawling-sample/clone/ncov/';
        const resp = await this.client.get(url);
        const $ = cheerio.load(resp.data);

        return {
            basicStats: this._extractBasicStat($),
            byAge: this._extractAge($),
            bySex: this._extractSex($),
        }
    }

    _extractBasicStat() {

    }
    _extractAge() {
        
    }
    _extractSex() {
    }

    // text to integer
    _nomalize(numberText) {
        const matches = /[0-9]+/.exec(numberText);
        const absValue = matches[0];
        
        return parseInt(absValue.replace(/[\s,]*/g, ''));
    }
}

module.exports = DomesticCrawler;