const express = require('express');

const PORT = process.env.PORT | 3000;

express()
    .get('/', (req, res) => res.send('<h1>Hello, World!</h1>'))
    .listen(PORT, () => console.log('Listening at ' + PORT));