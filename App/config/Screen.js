
var React = require('react-native');
var Dimensions = require('Dimensions');
var PixelRatio = require('PixelRatio');
var UtilsModule = require('NativeModules').UtilsModule;

var SCREEN_WIDTH_BASE = 375;
var SCREEN_HEIGHT_BASE  = 667;

var width =Dimensions.get('window').width,
    height = Dimensions.get('window').height,
    pxielRatio =PixelRatio.get();

if (React.Platform.OS === "android") {
    height -= 25;//UtilsModule.statusBarHeight/pxielRatio;
}

module.exports = {
    w: width,
    h: height,
    mw: width/2,
    mh: height/2,
    pr: pxielRatio,
    whr: width/height,
    ws: function (w) {return w*width/SCREEN_WIDTH_BASE},
    hs: function (h) {return h*height/SCREEN_HEIGHT_BASE},
};
