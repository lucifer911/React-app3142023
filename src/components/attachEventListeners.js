function attachEventListeners(getDataRetiring, getDataRetired) {
    const retiringBtn = document.querySelector('#retiringBtn');
    retiringBtn.addEventListener('click', getDataRetiring);
  
    const retiredBtn = document.querySelector('#retiredBtn');
    retiredBtn.addEventListener('click', getDataRetired);
  }
  
  module.exports = attachEventListeners;
  