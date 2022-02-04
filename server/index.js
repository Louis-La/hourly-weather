const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
const config = require('../config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}) );
app.use(express.static(`${__dirname} /../client/dist`));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/current', (req, res) => {

  const location = req.query.id;
  const epoch = Date.now()
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=hours%2Ccurrent%2Calerts%2Cdays&key=${config.APIKEY}&contentType=json`
  // const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${epoch}?key=${config.APIKEY}`
  axios.get(url)
    .then((results) => {
      res.send(results.data)
    })
    .catch((error) => {
      res.sendStatus(404)
      console.log('👎 Error has occurred on server side during /current GET request: ', error);
    })
})

app.listen(port, () => {
  console.log(`Hourly Weather app is listening at http://localhost:${port}`);
});