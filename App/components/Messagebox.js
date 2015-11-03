'use strict';
var React = require('react-native');
const {Platform, AlertIOS, ToastAndroid} = React;

module.exports = function(info) {
    if (Platform.OS === "android") {
        ToastAndroid.show(info, ToastAndroid.SHORT);
    } else {
        AlertIOS.alert(
            '提示',
            info,
            [
                {text: '确定'}
            ]
        )
    }
}
