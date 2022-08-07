const crypto = require('crypto');
const request = require('request');
// require json file with api keys
const config = require('../../secret.json');

// console.log(config);

const buildOptionsRequest = () => {
    const url = 'https://openapi-sandbox.kucoin.com/api/v1/accounts';
    const apiKey = config.kucoin.api_key;
    const apiSecret = config.kucoin.api_secret;
    const timestamp = Date.now();
    const stringToSign = timestamp + 'GET' + '/api/v1/accounts';
    const passPhrase = config.kucoin.pass_phrase;

    const signature = crypto.createHmac("sha256", apiSecret).update(stringToSign).digest("base64");


    const headers = {
            'KC-API-KEY': apiKey,
            'KC-API-SIGN': signature,
            'KC-API-TIMESTAMP': timestamp,
            'KC-API-KEY-VERSION': '1',
            'KC-API-PASSPHRASE': passPhrase,
            // 'Content-Type': 'application/json',
            // 'User-Agent' : 'Kucoin-Node-SDK/1.0.0'
        }

    const options = {
        url: url,
        method: 'GET',
        headers: headers
    }
    
    return options;
}

//Make request to Kucoin API
// const makeRequest = async (options) => {
//     // console.log('options:', options);
//     return new Promise((resolve, reject) => {
//         request(options, function (error, response) {
//             if (error) {
//                 console.log('error:', error);
//                 reject(error);
//             }
//             if (response.statusCode == 200) {
//                 console.log("Status 200");   
//                 let data = JSON.parse(response.body);
//                 resolve(data);
//             }
//         })
//     }
//     )
   

// }

// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         const options = buildOptionsRequest();
//         request(options, function(error, response) {
//             console.log('Make a request to ' + options.url);
//             if (error) {
//                 console.log('error:', error);
//                 reject(error);
//             }
//             if (response.statusCode == 200) {
//                 let data = JSON.parse(response.body);
//                 console.log('Stauts 200');
//                 resolve(data.data);
//             }
//         })
//     });
// }


module.exports = {
    buildOptionsRequest,
    // makeRequest
}