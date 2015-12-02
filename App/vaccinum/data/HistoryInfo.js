'use strict';
var React = require('react-native');
var {
    AsyncStorage
} = React;


const ITEM_NAME = "historyInfo";
const TIME_ITEM_NAME = "historyInfoTime";
const A_DAY_TIME = 24*3600*1000;

class HistoryInfo {
	constructor() {
        this.get();
	}
    get() {
        return new Promise(async(resolve, reject)=>{
            var infoStr = await AsyncStorage.getItem(ITEM_NAME);
            this.time = parseInt(await AsyncStorage.getItem(TIME_ITEM_NAME));
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
            this.info = info;
            this.time = Date.now();
            await AsyncStorage.setItem(TIME_ITEM_NAME, this.time+'');
            await AsyncStorage.setItem(ITEM_NAME, JSON.stringify(info));
            resolve();
        });
    }
    needUpdate() {
    	return Date.now()-this.time>A_DAY_TIME;
    }
}

module.exports = new HistoryInfo();
