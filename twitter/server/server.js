const express = require('express');
const Twitter = require('twit');
const app = express();

app.listen(3000, () => console.log('Server running'))

const client = new Twitter({
    consumer_key: 'Zc4djJeoq5JsAi2u37uXK7spz',
    consumer_secret: '11g8euokaiwYWo3jj1vYVv088Wi1vIJLfOb8HlewhXsZUyLzil',
    access_token: '1308020135974887424-CGacgHCFRtI08px3Q5k1Rlz6gcHpoy',
    access_token_secret: 'Xofz1ECyb97OyXpM5VScTvxAophS81866BMl8KW2YTGYb'
});

app.get('/home_timeline', (req, res) => {
    const params = {
        tweet_mode: 'extended',
        count: 10
    };

    client
        .get(`statuses/home_timeline`, params)
        .then(timeline => {

            res.send(timeline);
        })
        .catch(error => {
            res.send(error);
        });

});

app.get('/mentions_timeline', (req, res) => {
    const params = {
        tweet_mode: 'extended',
        count: 10
    };

    client
        .get(`statuses/mentions_timeline`, params)
        .then(timeline => {

            res.send(timeline);
        })
        .catch(error => {
            res.send(error);
        });

});

app.post('/post_tweet', (req, res) => {

    tweet = req.body;

    client
        .post(`statuses/update`, tweet)
        .then(tweeting => {
            console.log(tweeting);

            res.send(tweeting);
        })

    .catch(error => {
        res.send(error);
    });


});