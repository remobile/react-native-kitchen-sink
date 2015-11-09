'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} = React;

var Store = require('react-native-simple-store');

var Main = require('./main.js');
var Personal = require('../../personal/views/index.js');
var Settings = require('../../settings/views/index.js');



module.exports = React.createClass({
    nterSettings() {
        app.navigator.push({
            title: '设置',
            component: Settings,
        });
    },
    componentDidMount() {
        Store.get('PersonalInfo').then(info=>{
            setTimeout(function() {
            if (info) {
                app.navigator.replace({
                    title: '个人中心',
                    component: Personal,
                    rightButton: {  image: app.img.tabnav_list, handler: this.enterSettings},
                });
            } else {
                app.navigator.replace({
                    title: '主页',
                    component: Main
                });
            }}, 1000);
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode='stretch'
                    source={app.img.vaccinumBaike}
                    style={styles.splash} />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container:{
        flex:1,
    },
    splash: {
        flex:1,
    }
});
