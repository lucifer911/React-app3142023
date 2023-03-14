const axios = require('axios');

async function getPoolMetadata(poolId) {
  try {
    const response = await axios.get(`https://cardano-mainnet.blockfrost.io/api/v0/pools/${poolId}/metadata`, {
      headers: {
        'project_id': 'mainnetY824jTL95pWKA2HAkDTCyCw7XkHsP7NH'
      }
    });
    console.log(`Metadata for pool ${poolId}:`, response.data);
    const metadata = response.data;
    return metadata;
  } catch (err) {
    console.error(`Error fetching metadata for pool ${poolId}:`, err.message);
    throw err;
  }
}

module.exports = getPoolMetadata;
