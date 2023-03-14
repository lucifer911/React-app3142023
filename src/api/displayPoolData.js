const getPoolData = require('./getPoolData');
const getPoolMetadata = require('./getPoolMetadata');
const getPoolAdditionalInfo = require('../getPoolAdditionalInfo');
const createRow = require('../createRow');

const poolCache = {};

async function displayPoolData(endpoint) {
  const tableBody = document.querySelector('#poolTable tbody');
  tableBody.innerHTML = '';
  const poolData = await getPoolData(endpoint);
  const promises = poolData.map(pool => {
    const poolId = pool.pool_id;
    if (poolCache[poolId]) {
      console.log(`Using cached data for pool ${poolId}`);
      const { name, ticker, liveStake, activeStake, hexId } = poolCache[poolId];
      const newRow = createRow(poolId, name, ticker, liveStake, activeStake, hexId);
      tableBody.appendChild(newRow);
    } else {
      const metadataPromise = getPoolMetadata(poolId);
      const additionalInfoPromise = getPoolAdditionalInfo(poolId);
      const promises = [metadataPromise, additionalInfoPromise];
      return Promise.all(promises)
        .then(([metadata, additionalInfo]) => {
          const { name, ticker } = metadata;
          const { live_stake: liveStake, active_stake: activeStake, hex: hexId } = additionalInfo;
          poolCache[poolId] = { name, ticker, liveStake, activeStake, hexId };
          const newRow = createRow(poolId, name, ticker, liveStake, activeStake, hexId);
          tableBody.appendChild(newRow);
        })
        .catch(err => {
          console.error(`Error fetching data for pool ${poolId}:`, err.message);
        });
    }
  });
  await Promise.all(promises);
}

module.exports = displayPoolData;
