const request = require('request');
const cheerio = require('cheerio');

const URL = 'http://www.kosad.or.kr/info/special_game.asp?gbn=';

function getGameInfo(req, res) {
    const GAME_NO = req.query.no;

    request(URL + GAME_NO, (err, response, body) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        const $ = cheerio.load(body);
        let data = {};

        data.data = $('.subContent').text();

        res.status(200).json(data);
    });
}

exports.getGameInfo = getGameInfo;