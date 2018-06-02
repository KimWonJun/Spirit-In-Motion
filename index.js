const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 12345;

express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : true}))
    .get('/', (req, res) => res.send('<h1>Hello, World!</h1>'))
    .listen(PORT, () => console.log(`Listening at ${PORT}`));