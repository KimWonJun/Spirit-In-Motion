const request = require('request');
const cheerio = require('cheerio');

const URL = 'http://www.kosad.or.kr/info/special_game.asp?gbn=';

function getGameInfo(req, res) {
    const gameNo = req.query.no;

    request(URL + gameNo, (err, response, body) => {
        if(err) {
            console.log(err);
            return res.status(500).send(err);
        }
        const $ = cheerio.load(body);

        $('.subContent').each((index, elem) => {
            console.log(elem);
        });
    });
}

exports.getGameInfo = getGameInfo;