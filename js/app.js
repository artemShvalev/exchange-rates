'use strict';
function updateExchangeRates(update) {
 const data = document.getElementById('date');
  data.textContent = update.date;
 const buyRate = document.getElementById('usd-buy-rate');
  buyRate.textContent = update.usd.buyRate;
 const sellRate = document.getElementById('usd-sell-rate');
  sellRate.textContent = update.usd.sellRate;
 const eurBuyRate = document.getElementById('eur-buy-rate');
  eurBuyRate.textContent = update.eur.buyRate;
 const eurSellRate = document.getElementById('eur-sell-rate');
  eurSellRate.textContent = update.eur.sellRate;
}

// const update = {
//   date: '20 июля',
//   usd: {
//     buyRate: '73,75',
//     sellRate: '75,24',
//   },
//   eur: {
//     buyRate: '86,70',
//     sellRate: '88,74',
//   }
// };


updateExchangeRates();