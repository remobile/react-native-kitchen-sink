'use strict';
var Store = require('react-native-store');

module.exports = {
    getPersonalInfo = async function(){
        var userModel = await reactNativeStore.model("PersonalInfo");
        var data = await userModel.get();

        return new Promise(function (resolve, reject){
            resolve(data);
        });
    },
    setPersonalInfo = async function(){
        var userModel = await reactNativeStore.model("PersonalInfo");
        var data = await userModel.get();

        return new Promise(function (resolve, reject){
            resolve(data);
        });
    },
};
