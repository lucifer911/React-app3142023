const axios = require('axios');

async function getPoolData(endpoint) {
  try {
    const response = await axios.get(`https://cardano-mainnet.blockfrost.io/api/v0/pools/${endpoint}`, {
      headers: {
        'project_id': 'mainnetY824jTL95pWKA2HAkDTCyCw7XkHsP7NH'
      }
    });
    console.log(`${endpoint} pools:`, response.data);
    const poolData = response.data;
    return poolData;
  } catch (err) {
    console.error(`Error fetching ${endpoint} pools:`, err.message);
    throw err;
  }
}

module.exports = getPoolData;
