'use strict';
var Store = require('react-native-store');

var DB_NAME = "personalInfo";

module.exports = {
    async get() {
        var model = await Store.model(DB_NAME);
        var info = await model.find({active: true});
        this.info = info[0];
        return new Promise(function (resolve, reject){
            resolve(info[0]);
        });
    },
    async set(info) {
        var model = await Store.model(DB_NAME);
        info.active = true;
        this.info = info;
        var obj = {
            username: info.username,
            birthday: info.birthday,
            mothername: info.mothername,
            phone: info.phone
        };
        var req = await model.get(obj);
        if (!req.length) {
            await model.add(info);
        } else {
            await model.update(info, req[0]);
        }
        return new Promise(function (resolve, reject){
            resolve();
        });
    }
};
