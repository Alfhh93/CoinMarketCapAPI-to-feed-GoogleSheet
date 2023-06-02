function getCryptoData() {

    var sh1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    var sh2=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
    
    //API key from Coinmarketcap API in Sheet1 cell A1. There are free plans, visit https://coinmarketcap.com/api/ 
    var apiKey=sh1.getRange(1, 1).getValue();   
    // The following variable, cryptos, can include any cryptocurrency you want to add.      
    var cryptos = ["BTC", "ETH"];

    var url="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=" + cryptos;
    var requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      start: 1,
      limit: 5000,
      convert: 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': apiKey
    },
    json: true,
    gzip: true
  };

    var httpRequest= UrlFetchApp.fetch(url, requestOptions);
    var getContext= httpRequest.getContentText();
    
    var parseData=JSON.parse(getContext);
  // Loop through each cryptocurrency and set the price in the sheet not working so far
  for (var i = 0; i < cryptos.length; i++) {
    var crypto = cryptos[i];
    var price = parseData.data[crypto].quote.USD.price;
    var rank = parseData.data[crypto].cmc_rank;
    var row = i + 1;
    sh2.getRange(row, 2).setValue(price);
    sh2.getRange(row, 4).setValue(rank);
  }
}
