const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

// setup AYLIEN API
var AYLIENTextAPI = require('aylien_textapi');
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

app.get('/news', evaluateNews);

function evaluateNews(req, res) {
    if(req.body()) {
      textapi.sentiment({
        url: req.body()
      }, function(error, response) {
        if (error === null) {
          res.send(response);
        }
      });
    }
    else {
      res.send("Please check the value of the URL entered. Something seems to be wrong!");
    }
}