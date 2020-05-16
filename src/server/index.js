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

app.get('/', function(req, res){
    res.sendFile('dist/index.html');
})

app.use(express.static('dist'));

const port = 8081;
app.listen(port, listener);

function listener() {
    console.log(`Server is listening on port ${port}`);
}
