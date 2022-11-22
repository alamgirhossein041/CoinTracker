const config = require('../../secret.json');


const buidPathCMC = (endPoint, query = '') => {

    const endPoints = {
        'metadata': '/v2/cryptocurrency/info?symbol=',
        'all-tokens': '/v1/cryptocurrency/map',
        'prices': '/v2/cryptocurrency/quotes/latest?symbol=',
    }
    if (query === '') {
        return 'https://pro-api.coinmarketcap.com' + endPoints[endPoint]
    } else {
        let path = 'https://pro-api.coinmarketcap.com' + endPoints[endPoint] + query.symbol;
        // console.log('path : ', path);
        return path;
    }
}





module.exports = {
    buidPathCMC
}
