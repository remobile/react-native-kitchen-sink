'use strict';
var Mongoose = require('@remobile/react-native-mongoose');

var DB_NAME = "personalInfo";
const CLT_NAME = "personalInfo";


class personalInfo {
    constructor() {
        this.db = new Mongoose(DB_NAME);
        this.collection = this.db.collection(CLT_NAME, {max:30});
    }
    async get() {
        var collection = this.collection;
        var info = await collection.findOne({active: true});
        this.info = info;
        return new Promise(function (resolve, reject){
            resolve(info);
        });
    }
    async set(info) {
        var collection = this.collection;
        info.active = true;
        this.info = info;
        var query = {
            username: info.username,
            birthday: info.birthday,
            mothername: info.mothername,
            phone: info.phone
        };
        await collection.upsert(info, {active: true});
        return new Promise(function (resolve, reject){
            resolve();
        });
    }
}

module.exports = new personalInfo();
