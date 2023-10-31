"use strict";
var express = require('express');
var app = express();
var port = 3000;
app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.json({
    staus: "ok",
    message: "Working ok!"
  });
});
app.listen(port, () => {
  console.log("Example app listening on port" + port);
});