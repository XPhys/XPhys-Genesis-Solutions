// make Node.js to be Daemon
require('daemon')();

// declare dependencies
var express = require('express');
var path = require('path');

// declare app using express framework
var app = new express();

// default rounting
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/api/test', function (req, res) {
    res.send("Test, OK");
});

// start server listenning at port: 80
app.listen(80);
console.log("App listening on port 80");