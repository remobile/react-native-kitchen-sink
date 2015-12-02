'use strict';
var React = require('react-native');
var {
    AsyncStorage
} = React;


const ITEM_NAME = "baikeInfo";

class BaikeInfo {
    constructor() {
        this.get();
	}
    get() {
        return new Promise(async(resolve, reject)=>{
            var infoStr = await AsyncStorage.getItem(ITEM_NAME);
            var info = null;
            try {
            	info = JSON.parse(infoStr);
            } catch(e) {reject(e)}
            resolve(info);
            this.info = info;
        });
    }
    set(info) {
        return new Promise(async(resolve, reject)=>{
            console.log(info);
            this.info = info;
            await AsyncStorage.setItem(ITEM_NAME, JSON.stringify(info));
            resolve();
        });
    }
}

module.exports = new BaikeInfo();
