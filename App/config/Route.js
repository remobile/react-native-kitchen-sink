'use strict';

const DES_KEY = "ABCDEFGH";
const SERVER =  "http://192.168.1.73:3000/";


module.exports = {
    ROUTE_LOGIN: SERVER+"userManage/login"
};

module.exports.DES_KEY =  DES_KEY;
