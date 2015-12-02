'use strict';

const DES_KEY = "ABCDEFGH";
// const SERVER =  "http://192.168.1.117:3000/";
const SERVER =  "http://123.58.136.137:18080/cvs/phone/";

module.exports = {
    ROUTE_BIND_INFO: SERVER+"babyManage/bind.action",
   	ROUTE_UPLOAD_USER_HEAD: SERVER+"babyManage/picture.action",
   	ROUTE_VACCINUM_HISTORY_LIST: SERVER+"babyManage/vaccineList.action",
   	ROUTE_VACCINUM_DATA_LIST: SERVER+"babyManage/typeVaccineList.action",
   	ROUTE_FEADBACK: SERVER+"babyManage/getFadeback.action",
   	ROUTE_VERSION_URL: SERVER+"download/updateVersion.json",
   	ROUTE_APK_URL: SERVER+"download/vaccinum.apk",
};

module.exports.DES_KEY =  DES_KEY;
