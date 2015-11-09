'use strict';

var queryString = require('query-string');
var ProgressHUD = require('react-native-progress-hud');

function POST(url, parameter, success, failed) {
    console.log("send:", parameter);
    var param = queryString.stringify(parameter);
    app.showProgressHUD();
    fetch(url,  {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: param
    })
    .then((response) => response.text())
    .then((json) => {
        app.dismissProgressHUD();
        success && success(json);
    })
    .catch((error) => {
        app.dismissProgressHUD();
        failed && failed(error);
    });
}

module.exports = POST;
