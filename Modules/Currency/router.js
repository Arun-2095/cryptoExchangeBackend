const express = require('express');
const CurrencyRoute = express.Router();


const { getAllCurrency , getSpecficCurrency} = require('./controller');

// CurrencyRoute.use(Authorization.verifyToken);

CurrencyRoute.get('/', getAllCurrency);

// CurrencyRoute.use(getActiveAccount);

CurrencyRoute.get('/:currency/summary', getSpecficCurrency);

module.exports = CurrencyRoute;
