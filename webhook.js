const express = require('express');
const app = express.Router()

const line = require('@line/bot-sdk');
const middleware = require('@line/bot-sdk').middleware

const config = {
    channelAccessToken: "CgSC5kxXNi6NpPrQWc7mnnx38cryR8MnIFn+PYwlYkPTPumZ3IUm2iKtAnnh8HSCG+N9Xidzkji1KsX/lEzGvn3dkHIts9SmvfV14F91VaRCchO8I91biinWCvh33cC57ZLS9O0dCmKmBHoM1iT5+wdB04t89/1O/w1cDnyilFU=",
    channelSecret: "b082f91885806adde6249f9b86ff0243"
}

const client = new line.Client(config);

app.post("/webhook", middleware(config), (req, res) => {
    res.sendStatus(200);
    const e = req.body.events[0];
    console.log(e);

    if (e.type === 'message' && e.message.type === 'text') {
        handleMessageEvent(e);
    }
});

const handleMessageEvent = async (e) => {
    var msg = {
        type: 'text',
        text: 'สวัสดีครัช'
    };
    return client.replyMessage(e.replyToken, msg);
}



module.exports = app;