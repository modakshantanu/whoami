// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyparser = require("body-parser");

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

//app.use(bodyparser.json())

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  console.log(request.body)
  response.send("0");
  
});

app.listen(process.env.PORT);

