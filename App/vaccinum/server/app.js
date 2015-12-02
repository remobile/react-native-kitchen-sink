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
        res.send(JSON.stringify({success:true, context:data}));
    }, timeout);
};

app.post('/babyManage/bind.action', function (req, res) {
    console.log(req.body);
    app.send(res, {userId:1});
});

app.post('/babyManage/vaccineList.action', function (req, res) {
    console.log('/babyManage/vaccineList.action');
    app.send(res, {
        nextVaccineCode: 12,
        nextVaccineTime: "2015-02-14",
        "list":[
            {"vaccineName":"百白破",
            "vaccineId":30,
            "vaccineTime":1,
            "time":"2015-02-14",
            "immuneType":1,
            "imanufacturer":"昆明制药厂",
            "inoculationUunit":"贵阳社区医院",
            "inoculationAddr":"贵阳市二桥"},
            {"vaccineName":"百白破",
            "vaccineId":30,
            "vaccineTime":1,
            "time":"2015-02-14",
            "immuneType":1,
            "imanufacturer":"昆明制药厂",
            "inoculationUunit":"贵阳社区医院",
            "inoculationAddr":"贵阳市二桥"},
        ]
    });
});


//上传文件
var upload = multer({dest: 'image/'});
var type = upload.single('file');
app.post('/babyManage/picture.action', type, function (req,res) {
    console.log(req.file);
    console.log(req.body);
    shell.mv("-f", req.file.path, req.file.destination+req.file.originalname);
    app.send(res, {});
});


app.listen(3000, function() {
    console.log("server listen on: http://localhost:3000");
});
