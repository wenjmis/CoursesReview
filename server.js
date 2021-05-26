var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.get(/js|css|img/, (req, res) => {
  res.sendFile(`${__dirname}//${req.path}`);
});

app.get(/\//, (req, res) => {
  res.sendFile(`${__dirname}/${__dirname}/index.html`);
});

app.listen(port);