const displayPoolData = require('./api/displayPoolData');
const attachEventListeners = require('./attachEventListeners');

function initialize() {
  attachEventListeners(displayPoolData);
  displayPoolData('retiring');
}

module.exports = initialize;
