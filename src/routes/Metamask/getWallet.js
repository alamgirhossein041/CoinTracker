
const Web3 = require("web3")


module.exports = (app) => {
    app.get('/metamask-wallet', async (req, res) => {

        const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/c031c373dff84c3e998e497555c9c14a"))

        web3.eth.getBalance("0x11921F6eE564D7A087d02208fDC6947C30557B10", function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log(web3.utils.fromWei(result, "ether") + " ETH")
                res.json({ eth:result  });
            }
        })
       
    }

    )
}



