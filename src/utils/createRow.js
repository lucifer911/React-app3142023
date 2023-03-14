function createRow(poolId, poolName, poolTicker, liveStake, activeStake, poolHexId) {
    const newRow = document.createElement('tr');
  
    const poolIdCell = document.createElement('td');
    poolIdCell.innerText = poolId;
    newRow.appendChild(poolIdCell);
  
    const poolNameCell = document.createElement('td');
    poolNameCell.innerText = poolName;
    newRow.appendChild(poolNameCell);
  
    const poolTickerCell = document.createElement('td');
    poolTickerCell.innerText = poolTicker;
    newRow.appendChild(poolTickerCell);
  
    // Convert live stake from lovelaces to ADA
    const liveStakeAda = liveStake / 1000000;
    const liveStakeCell = document.createElement('td');
    liveStakeCell.innerText = `${liveStakeAda.toLocaleString()} ADA`;
    newRow.appendChild(liveStakeCell);
  
    // Convert active stake from lovelaces to ADA
    const activeStakeAda = activeStake / 1000000;
    const activeStakeCell = document.createElement('td');
    activeStakeCell.innerText = `${activeStakeAda.toLocaleString()} ADA`;
    newRow.appendChild(activeStakeCell);
  
    const tweetCell = document.createElement('td');
    const tweetButton = document.createElement('a');
    tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Delegators off ${poolName}, Ticker (${poolTicker})! This pool is ${poolHexId ? 'Retiring SOON' : 'Retired'}. ${poolName} still has ${activeStake / 1000000} $ADA staked. Please move your ada to a different stake pool. retire.poolinfo.me #Cardano #Enigma #one`)}`;
    tweetButton.target = '_blank';
    tweetButton.innerText = 'Tweet';
    tweetCell.appendChild(tweetButton);
    newRow.appendChild(tweetCell);
  
    const poolLinkCell = document.createElement('td');
    const poolLinkButton = document.createElement('a');
    poolLinkButton.href = `https://pool.pm/${poolHexId}`;
    poolLinkButton.target = '_blank';
    poolLinkButton.innerText = 'Pool pm';
    poolLinkCell.appendChild(poolLinkButton);
    newRow.appendChild(poolLinkCell);
  
    return newRow;
  }
  
  module.exports = createRow;
  