const path = require('path');
const fs = require('fs');
const ApiClient = require('./api-client');
const {crawlAndUpdateDomestic} = require('./domestic-updater');

async function main() {
    const outputPath = path.join(process.cwd(), 'output');
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
    }

    const apiClient = new ApiClient();

    try {
        console.log('update stared');
        await crawlAndUpdateDomestic(outputPath, apiClient);
    } catch (e) {
        console.error('update crawl failed', e);
    }
}

main();