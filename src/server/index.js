const express = require('express');
const dotenv = require('dotenv');
const AYLIENTextAPI = require('aylien_textapi');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();

// setup AYLIEN API
var textapi = new AYLIENTextAPI({
  application_id: process.env.APP_ID,
  application_key: process.env.API_KEY
});

app.use(express.static('dist'));

const port = 8081;
app.listen(port, listener);

function listener() {
    console.log(`Server is listening on port ${port}`);
}

// app endpoints

app.get('/', function(req, res){
  res.sendFile('dist/index.html');
})

app.post('/news', evaluateNews);

function evaluateNews(req, res) {
    if(req.body) {
      textapi.sentiment({
        url: req.body.text
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
        else {
          res.send(error);
        }
      });
    }
    else {
      res.send("Please check the value of the URL entered. Something seems to be wrong!");
    }
}