
const CryptoComApi = require('../../api/CryptoComApi');

const agregateWallet = (wallet) => {
    ;
    let result = [];
    console.log('agregateWallet ', wallet);
    wallet.forEach(function (element) {
        if (!this[element.currency]) {
            this[element.currency] = {
                currency: element.currency,
                balance: 0,
                spot: element.balance,
                stake: 0
            };

            result.push(this[element.currency]);

        }

        this[element.currency].balance += parseFloat(element.balance);
        this[element.currency].stake += parseFloat(element.stake);

    }, Object.create(null));
    return result;
}

const mergeStacking = (wallet) => {

    // Verifi si extention STAKE dans un currency
    for (let index = 0; index < wallet.length; index++) {

        let currency = wallet[index].currency;
        console.log(currency);
        if (currency.indexOf('-STAKE') > -1) {

            wallet[index].currency = currency.slice(0, -6);
            wallet[index].stake = wallet[index].balance;
            wallet[index].available = 0;
        }
    }


    return wallet;
}


module.exports = (app) => {
    app.get('/crypto-com/wallet', async (req, res) => {

        try {
            let data = await CryptoComApi.getAccountSummary();
            console.log('data', data);
            let result = JSON.parse(data);


            if (result.hasOwnProperty('result')) {
                result = result['result']['accounts'];
                // filter balance > 0
                let balance = result.filter(item => item.balance > 0)

                // Merge Staking Position 
                balance = mergeStacking(balance);
                // Merge array with same token 
                balance = agregateWallet(balance);

                res.json(balance);
            } else {

                res.json(result)
            }

        } catch (error) {
            console.log('error : ', error);
            res.json({ error });
        }

    }
    )
}


