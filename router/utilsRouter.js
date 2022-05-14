const { response } = require("express");
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", (req, res) => {
    var myHeaders = new fetch.Headers();
    let currencyTo = req.query.currencyTo;
    let currencyFrom = req.query.currencyFrom;
    let amount = req.query.amount;
    myHeaders.append("apikey", process.env.EXCHANGE_API_KEY);

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };
    
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyTo}&from=${currencyFrom}&amount=${amount}`, requestOptions)
    .then(res => res.json())
    .then(text => res.send(`${text.query.amount} ${text.query.from} = ${text.result} ${text.query.to}`));
  });
  
  module.exports = router;