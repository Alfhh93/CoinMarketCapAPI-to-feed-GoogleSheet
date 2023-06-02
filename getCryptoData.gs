function getCryptoData() {

    var sh1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    var sh2=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
    
    //API key from Coinmarketcap API in Sheet1 cell A1. There are free plans, visit https://coinmarketcap.com/api/ 
    var apiKey=sh1.getRange(1, 1).getValue();
    
    var cryptos = "ADA,BNB,BTC,CHZ,DOT,ETH,MATIC,ONE,SOL,UNI,VET,NEXO,CAVE,MIOTA,REVU,MELD,PAXG,SAND,EUROC,LINK,ATOM,RUNE,MANA,XRAY,ACS"

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
//   for (var i = 0; i < parseData.length; i++) {
//     var symbol = parseData[i].symbol;
//     var price = parseData[i].quote.USD.price;
//     var rank = parseData[i].cmc_rank;
//     var row = i + 1;
//     sh2.getRange(row, 2).setValue(price);
//     sh2.getRange(row, 4).setValue(rank);
//   }
// }
  
  sh2.getRange(1, 2).setValue(parseData.data.ADA.quote.USD.price);
  sh2.getRange(1, 4).setValue(parseData.data.ADA.cmc_rank);
  sh2.getRange(2, 2).setValue(parseData.data.BNB.quote.USD.price);
  sh2.getRange(2, 4).setValue(parseData.data.BNB.cmc_rank);
  sh2.getRange(3, 2).setValue(parseData.data.BTC.quote.USD.price);
  sh2.getRange(3, 4).setValue(parseData.data.BTC.cmc_rank);
  sh2.getRange(4, 2).setValue(parseData.data.CHZ.quote.USD.price);
  sh2.getRange(4, 4).setValue(parseData.data.CHZ.cmc_rank);
  sh2.getRange(5, 2).setValue(parseData.data.DOT.quote.USD.price);
  sh2.getRange(5, 4).setValue(parseData.data.DOT.cmc_rank);
  sh2.getRange(6, 2).setValue(parseData.data.ETH.quote.USD.price);
  sh2.getRange(6, 4).setValue(parseData.data.ETH.cmc_rank);
  sh2.getRange(7, 2).setValue(parseData.data.MATIC.quote.USD.price);
  sh2.getRange(7, 4).setValue(parseData.data.MATIC.cmc_rank);
  sh2.getRange(8, 2).setValue(parseData.data.ONE.quote.USD.price);
  sh2.getRange(8, 4).setValue(parseData.data.ONE.cmc_rank);
  sh2.getRange(9, 2).setValue(parseData.data.SOL.quote.USD.price);
  sh2.getRange(9, 4).setValue(parseData.data.SOL.cmc_rank);
  sh2.getRange(10, 2).setValue(parseData.data.UNI.quote.USD.price);
  sh2.getRange(10, 4).setValue(parseData.data.UNI.cmc_rank);
  sh2.getRange(11, 2).setValue(parseData.data.VET.quote.USD.price);
  sh2.getRange(11, 4).setValue(parseData.data.VET.cmc_rank);
  sh2.getRange(12, 2).setValue(parseData.data.NEXO.quote.USD.price);
  sh2.getRange(12, 4).setValue(parseData.data.NEXO.cmc_rank);
  sh2.getRange(13, 2).setValue(parseData.data.CAVE.quote.USD.price);
  sh2.getRange(13, 4).setValue(parseData.data.CAVE.cmc_rank);
  sh2.getRange(14, 2).setValue(parseData.data.MIOTA.quote.USD.price);
  sh2.getRange(14, 4).setValue(parseData.data.MIOTA.cmc_rank);
  sh2.getRange(15, 2).setValue(parseData.data.REVU.quote.USD.price);
  sh2.getRange(15, 4).setValue(parseData.data.REVU.cmc_rank);
  sh2.getRange(16, 2).setValue(parseData.data.MELD.quote.USD.price);
  sh2.getRange(16, 4).setValue(parseData.data.MELD.cmc_rank);
  sh2.getRange(17, 2).setValue(parseData.data.PAXG.quote.USD.price);
  sh2.getRange(17, 4).setValue(parseData.data.PAXG.cmc_rank);
  sh2.getRange(18, 2).setValue(parseData.data.SAND.quote.USD.price);
  sh2.getRange(18, 4).setValue(parseData.data.SAND.cmc_rank);
  sh2.getRange(19, 2).setValue(parseData.data.EUROC.quote.USD.price);
  sh2.getRange(19, 4).setValue(parseData.data.EUROC.cmc_rank);
  sh2.getRange(20, 2).setValue(parseData.data.LINK.quote.USD.price);
  sh2.getRange(20, 4).setValue(parseData.data.LINK.cmc_rank);
  sh2.getRange(21, 2).setValue(parseData.data.RUNE.quote.USD.price);
  sh2.getRange(21, 4).setValue(parseData.data.RUNE.cmc_rank);
  sh2.getRange(22, 2).setValue(parseData.data.ATOM.quote.USD.price);
  sh2.getRange(22, 4).setValue(parseData.data.ATOM.cmc_rank);
  sh2.getRange(23, 2).setValue(parseData.data.MANA.quote.USD.price);
  sh2.getRange(23, 4).setValue(parseData.data.MANA.cmc_rank);
  sh2.getRange(24, 2).setValue(parseData.data.XRAY.quote.USD.price);
  sh2.getRange(24, 4).setValue(parseData.data.XRAY.cmc_rank);
  sh2.getRange(25, 2).setValue(parseData.data.ACS.quote.USD.price);
  sh2.getRange(25, 4).setValue(parseData.data.ACS.cmc_rank);
}