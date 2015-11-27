'use strict';

const DES_KEY = "ABCDEFGH";
// const SERVER =  "http://192.168.1.117:3000/";
const SERVER =  "http://222.54.3.36:53888/cvs/";


module.exports = {
    ROUTE_BIND_INFO: SERVER+"bindInfo",
    ROUTE_UPLOAD_USER_HEAD: SERVER+"upload"
};

module.exports.DES_KEY =  DES_KEY;
