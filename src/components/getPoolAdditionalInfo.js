const axios = require('axios');

async function getPoolAdditionalInfo(poolId) {
  try {
    const response = await axios.get(`https://cardano-mainnet.blockfrost.io/api/v0/pools/${poolId}`, {
      headers: {
        'project_id': 'mainnetY824jTL95pWKA2HAkDTCyCw7XkHsP7NH'
      }
    });
    console.log(`Additional info for pool ${poolId}:`, response.data);
    const additionalInfo = response.data;
    return additionalInfo;
  } catch (err) {
    console.error(`Error fetching additional info for pool ${poolId}:`, err.message);
    throw err;
  }
}

module.exports = getPoolAdditionalInfo;
