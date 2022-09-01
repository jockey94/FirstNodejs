const fetch = require('node-fetch');
const express = require('express');

const app = express();

app.get('/', async(req, res) => {
    fetch("https://checkip.amazonaws.com/")
    .then(cres => cres.text())
    .then(data => res.json(data));
});

app.listen(3030, () => {
    console.log('server is listening on port 3030!!!');
});
