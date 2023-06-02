# Cryptocurrency Data Retrieval Script from CMC to GoogleSheet

This script retrieves cryptocurrency data from the Coinmarketcap API and populates it in a Google Sheet. It uses Google Apps Script to automate the process. 

I am planning to improve the script by: 
1. Including more relevant data into the table
2. Sharing a template of the GoogleSheet I use
3. Any feedback or suggestion I migth get

## Prerequisites
- Obtain an API key from the Coinmarketcap API. Visit the [Coinmarketcap API](https://coinmarketcap.com/api/) website for more information.
- Set up a Google Sheet with two sheets named "Sheet1" and "Sheet2".
- In "Sheet1", enter your Coinmarketcap API key in cell A1.

## Usage
1. Open the Google Sheets document where you want to populate the cryptocurrency data.
2. Go to **Extensions > Apps Script** to open the Apps Script editor.
3. Copy and paste the code from the [script.js](script.js) file into the editor.
4. Update the API key and sheet names if necessary.
5. Save the script and close the Apps Script editor.
6. Back in the Google Sheets document, go to **Add-ons > Cryptocurrency Data Retrieval > Get Crypto Data** to run the script.
7. The cryptocurrency prices and ranks will be populated in "Sheet2" of the Google Sheet.

## Technical Document Summary
- The script defines the `getCryptoData()` function to retrieve cryptocurrency data and populate it in a Google Sheet.
- It retrieves the API key from a specific cell in the sheet.
- Constructs the API request URL based on the desired cryptocurrency symbols.
- Sets up the request options with the API key.
- Makes the API request and stores the response.
- Parses the response content as JSON.
- Writes the price and rank data for each cryptocurrency in the Google Sheet using the `getRange().setValue()` method.

Please note that the script assumes the structure of the API response and the sheet layout based on the provided code.

For more details, refer to the [script.js](script.js) file.
