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
    timeout = timeout||1000,
    setTimeout(function() {
        res.send(JSON.stringify({success:true, content:data}));
    }, timeout);
};

app.post('/bindInfo', function (req, res) {
    var body = req.body;
    body.nextVaccinumTime = '2017-01-09';
    body.nextVaccinumName ='百白破';
    console.log(body);
    app.send(res, body);
});


app.listen(3000, function() {
    console.log("server listen on: http://localhost:3000");
});
