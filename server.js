var express = require('express');
var app = express();
var api = require('./server/routes/api');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(api);

app.listen(3000, function () {
  console.log('Api works on port 3000!')
})