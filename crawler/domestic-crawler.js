const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');

class DomesticCrawler{
    constructor() {
        this.client = axios.create({
            Headers: {
                'User-Agent' : 'Mozilla/5.0'
            },
        });
    }

    async crawlStat() {
        const url = 'http';
        const resp = await this.client.get(url);
        const $ = cheerio.load(resp.data);

        return {
            basicStats: this._extractBasicStat,
            byAge: this._extractAge,
            bySex: this._extractSex,
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