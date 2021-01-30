var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require('path');

var SQL_IPADDRESS = "127.0.0.1";
var password = "mySQListhebest2021";

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

var connection = mysql.createConnection({
  // MySQL Connection details.
  host: SQL_IPADDRESS,
  user: "root",
  password: password,
  database: "forum"
});

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/index.html"));
});


app.get("/viewproduct", function (request, response) {
  var post = request.body;

  connection.query("SELECT * FROM posts", [post], function (
    error,
    results,
    fields
  ) {
    if (results.length > 0) {
      // return post data
      response.send(JSON.stringify());
      //response.send("post found");
    } else {
      response.send("No post found ");
    }
    response.end();
    console.log(results);
  });
});

app.listen(3000);
