const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const PORT = process.env.PORT || 12345;

express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : true}))
    .use('/docs', express.static('./public/API-spec.xlsx'))
    .use('/gameInfo', require('./routes/gameInfo'))
    .use('/user', require('./routes/user'))
    .use('/qna', require('./routes/qna'))
    .use('/place', require('./routes/place'))
    .use('/tip', require('./routes/tip'))
    .get('/', (req, res) => res.send('<h1>Hello, World!</h1>'))
    .listen(PORT, () => console.log(`Listening at ${PORT}`));