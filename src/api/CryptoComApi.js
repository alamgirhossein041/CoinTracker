const request = require('request');
const config = require('../../secret.json');
const crypto = require('crypto-js');

const signRequest = (request_body, api_key, secret) => {
    const { id, method, params, nonce } = request_body;
    // object to string
    function isObject(obj) { return obj !== undefined && obj !== null && obj.constructor == Object; }
    function isArray(obj) { return obj !== undefined && obj !== null && obj.constructor == Array; }
    function arrayToString(obj) { return obj.reduce((a, b) => { return a + (isObject(b) ? objectToString(b) : (isArray(b) ? arrayToString(b) : b)); }, ""); }
    function objectToString(obj) { return (obj == null ? "" : Object.keys(obj).sort().reduce((a, b) => { return a + b + (isArray(obj[b]) ? arrayToString(obj[b]) : (isObject(obj[b]) ? objectToString(obj[b]) : obj[b])); }, "")); }

    const paramsString = objectToString(params);

    // console.log('paramsString', paramsString);

    const sigPayload = method + id + api_key + paramsString + nonce;
    request_body.sig = crypto.HmacSHA256(sigPayload, secret).toString(crypto.enc.Hex);
    return request_body;
};

const getOptions = (url, method, requestBody) => {
    return {
        url: url,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: requestBody
    }
}

const apiKey = config.Crypto.api_key;
const apiSecret = config.Crypto.api_secret;

let req = (method, params = {}) => {
    return {
        // For id set random integer value bettwen 10 and 1000
        id: Math.floor(Math.random() * (10000 - 10 + 1)) + 10,
        method: method,
        api_key: apiKey,
        params: params,
        nonce: Date.now()
    };
}

const getRequestBody = (method, params) => {
    return JSON.stringify(signRequest(req(method, params), apiKey, apiSecret));
}
function getAccountSummary() {
    console.log('getAccountSummary');

    return new Promise((resolve, reject) => {

        let body = getRequestBody('private/get-account-summary', {});

        const options = getOptions('https://api.crypto.com/v2/private/get-account-summary', 'POST', body);

        // use requestObj to make request
        request(options, function (error, response) {
            if (error) {
                console.log('error:', error);
                reject(error);
            }
            if (response.statusCode == 200) {
                resolve(response.body);
            }
        }
        );


    })

}
getAccountSummary().then(data => {
    return JSON.parse(data);
}).catch(err => {
    console.log('err', err);
    return err;
})



//////////////////////////////////////
// Trade History

function getTimeStampWithDateTime(dateTime) {
    //Format = 2022-05-05 20:42:19
    let time = '00:00:00';
    let timeStamp = new Date(dateTime + ' ' + time).getTime();
    console.log(dateTime + ' => transformed timeStamp ' + timeStamp);
    return timeStamp;
}


async function getOrderHistory(startDate) {
    // console.log('getOrderHistory for date', startDate);
    return new Promise((resolve, reject) => {
      
        let endDate = startDate + 86400000;
        let requestBody = getRequestBody('private/get-order-history', {
            // page_size: 200,
            // page: 0,
            start_ts: startDate,
            end_ts: endDate
        })

        const options = getOptions('https://api.crypto.com/v2/private/get-order-history', 'POST', requestBody);
        // use requestObj to make request
        request(options, function (error, response) {
            if (error) {
                console.log('error:', error);
                reject(error);
            }
            if (response.statusCode == 200) {
                // console.log('body:', response.body);
                resolve(response.body);
            } else {
                console.log('response.statusCode', response);
                console.log('response.statusMessage', response.statusMessage);
            }
        }
        );
    })
}


async function getOrderHistoryLoop(startDate, daysFetched) {

    let startDateTime = getTimeStampWithDateTime(startDate);
    let i = 0;
    let start = startDateTime;
    let orderHistory = [];

    while (i < daysFetched) {

        start = start + 86400000 * i;
        console.log('getOrderHistory for start at : ', start);
        let dataHistory = await getOrderHistory(start)
        let result = JSON.parse(dataHistory);
        // console.log('result', result);
        if (result.result.order_list.length > 0) {
            orderHistory = orderHistory.concat(result.result.order_list);
        }
        i++;
    }

    // Filter out trades that are not completed
    orderHistory = orderHistory
    .filter(trade => trade.status == 'FILLED')
   // sort by timestamp newer to older the created_time field
    .sort((a, b) => {
              return a.create_time - b.create_time;
    }
    );       

    return orderHistory;
}


module.exports = {
    getRequestBody,
    signRequest,
    getAccountSummary,
    getOrderHistoryLoop
}