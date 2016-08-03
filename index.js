'use strict';

var express = require('express');
var app = express();


app.use('/docs', express.static(__dirname + '/api-doc'));
app.get('/api/pizza', function (req, res) {
  var response = {
    "plate": {
      "food": "pizza"
      },
    "napkin": "paper"
  };

  res.json(response);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
