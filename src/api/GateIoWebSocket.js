
const WebSocket = require('ws');
const config = require('../../secret.json');
var crypto = require('crypto');

const WS_URL = 'wss://api.gateio.ws/ws/v4/';
// add your key and secret
const KEY = config.GateIo.api_key;
const SECRET = config.GateIo.api_secret;

var ws = new WebSocket(WS_URL);

function getSign(str) {
    return crypto.createHmac('sha512', SECRET).update(str).digest().toString('base64');
}

var gateio = {
    gateGet: function (id, method, params) {
        var array = JSON.stringify({
            "id": id,
            "method": method,
            "params": params
        });
        ws.send(array);
    },
    gateRequest: function (id, method, params) {
        var nonce = Math.round(new Date().getTime());
        params = [KEY, getSign(nonce + ""), nonce];
        var array = JSON.stringify({
            "id": id,
            "method": method,
            "params": params
        });
        console.log(array);
        ws.send(array);
    },
}

var methods;

module.exports = {
    wsGet: function (id, method, params) {
        console.log('wsGet: ', id, method, params);

        ws.onopen = function () {
            console.log('open ws');
            methods = method;

            if (method == 'server.sign')
                gateio.gateRequest(id, method, params);

            else if (method == 'order.query' || method == 'order.subscribe' || method == 'order.update' ||
                method == 'order.unsubscribe' || method == 'balance.query' || method == 'balance.subscribe' ||
                method == 'balance.update' || method == 'balance.unsubscribe') {
                gateio.gateRequest(id, 'server.sign', []);
                methods = 'server.sign';

                setTimeout(() => {
                    gateio.gateGet(id, method, params);
                    methods = "";
                }, 1000)
            }
            else{
                console.log('method classic :' + method);
                gateio.gateGet(id, method, params);
            }
              
        };

        ws.onmessage = function (evt) {
            console.log('onmessage : ' + evt.data);

            if (methods != 'server.sign')
            console.log('close after onmessage');
            ws.close();
        };

        ws.onclose = function () {
            console.log(' onclose ws');
        };

        ws.onerror = function (err) {
            console.log('error', err);
        };
    }
}