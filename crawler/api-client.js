const axios = require('axios');

class ApiClient {
    constructor() {
        const client = axios.create({
            baseURL: process.env.CORONABOARD_API_BASE_URL || 'http://localhost:8080',
        });

        client.interceptors.response.use((resp) => {
            return resp.data;
        })

        this.client = client;
    }

    async upsertGlobalStat(key, value) {
        return await this.client.post('global-stats', data);
    }

    async upsertKeyValue(key, value) {
        return await this.client.post('key-value', {
            key,
            value,
        });
    }
}

module.exports = ApiClient;