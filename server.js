const express = require('express');
const app = express();

const webhook = require("./webhook");
app.use(webhook);

app.listen(3000, () => {
    console.log('http://localhost:3000')
});

app.use(express.static(__dirname + '/www'));


