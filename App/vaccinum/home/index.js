'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} = React;

var TimerMixin = require('react-timer-mixin');

var Main = require('./main.js');
var Personal = require('../personal/index.js');
var Settings = require('../settings/index.js');

var PersonalInfo = require('../data/PersonalInfo.js');


module.exports = React.createClass({
    mixins: [TimerMixin],
    enterSettings() {
        app.navigator.push({
            title: '设置',
            component: Settings,
        });
    },
    componentDidMount() {
        app.module = app.module || {};
        app.module.Personal = Personal;
        app.module.Main = Main;

        PersonalInfo.get().then(info => {
            this.setTimeout(() =>{
                if (!info) {
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
                }
            }, 1000);
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
