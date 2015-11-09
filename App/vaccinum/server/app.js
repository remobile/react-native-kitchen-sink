var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var shell = require('shelljs');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.send = function(res, data, timeout) {
    timeout = timeout||3000,
    setTimeout(function() {
        console.log(data);
        res.send(JSON.stringify(data));
    }, timeout);
};

app.post('/login', function (req, res) {
    app.send(res, req.body);
});


app.listen(3000, function() {
    console.log("server listen on: http://localhost:3000");
});
