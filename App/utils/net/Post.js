'use strict';

var DesModule = require('NativeModules').DesModule;
var queryString = require('query-string');
var KEY = require('../../config/Route.js').DES_KEY;

function POST(url, parameter, success, failed) {
    console.log("send:", parameter);
    DesModule.encrypt(JSON.stringify(parameter), KEY, function(base64) {
        var param = queryString.stringify({data:base64});
        fetch(url,  {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param
        })
        .then((response) => response.text())
        .then((base64) => {
            DesModule.decrypt(base64, KEY, function(jsonString) {
                try {
                    var json = JSON.parse(jsonString);
                    console.log("recv:", json);
                    success && success(json);
                } catch(error) {
                    failed && failed(error);
                }
            });
        })
        .catch((error) => {
            failed && failed(error);
        });
    });
}

module.exports = POST;
