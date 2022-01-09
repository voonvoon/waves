const paypal = require('@paypal/checkout-server-sdk');
require('dotenv').config();

let clientId = process.env.PAYPAL_CLIENT_ID;
let clientSecret = process.env.PAYPAL_CLIENT_SECRET;
//if on production jz use this
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);

//if on real live case use this.
let client = new paypal.core.PayPalHttpClient(environment);

module.exports = {
    client
}
